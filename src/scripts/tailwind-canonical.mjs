#!/usr/bin/env node
import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const shouldFix = args.includes("--fix");
const explicitFiles = args.filter((arg) => arg !== "--fix");

const isTargetFile = (file) =>
  file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx");

const ignoredDirs = new Set(["node_modules", ".next", ".git", "coverage"]);

const walkFiles = (root = ".") => {
  const entries = readdirSync(root, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) {
        continue;
      }
      files.push(...walkFiles(join(root, entry.name)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (isTargetFile(entry.name)) {
      files.push(join(root, entry.name));
    }
  }

  return files;
};

const allFiles = (() => {
  try {
    execSync("command -v rg >/dev/null 2>&1", { stdio: "ignore" });

    const listOutput = execSync("rg --files -g '*.ts' -g '*.tsx' -g '*.js' -g '*.jsx'", {
      encoding: "utf8",
    });

    return listOutput
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((file) => !file.startsWith("node_modules/") && !file.startsWith(".next/"));
  } catch {
    return walkFiles();
  }
})();

const files = explicitFiles.length > 0 ? explicitFiles : allFiles;

const replacements = [
  {
    name: "var-bracket-to-canonical",
    regex: /(\b(?:[a-z-]+:)*)(text|bg|border)-\[var\(--([^)]+)\)\]/g,
    replacer: "$1$2-(--$3)",
  },
  {
    name: "rgb-alpha-canonical",
    regex: /rgb\(([^)]*?)_\/_([^)]*?)\)/g,
    replacer: "rgb($1/$2)",
  },
  {
    name: "min-height-740px",
    regex: /\bmin-h-\[740px\]\b/g,
    replacer: "min-h-185",
  },
];

const changed = [];

for (const file of files) {
  const original = readFileSync(file, "utf8");
  let next = original;

  for (const entry of replacements) {
    next = next.replace(entry.regex, entry.replacer);
  }

  if (next !== original) {
    changed.push(file);
    if (shouldFix) {
      writeFileSync(file, next, "utf8");
    }
  }
}

if (changed.length > 0) {
  const action = shouldFix ? "Fixed" : "Found";
  console.log(`${action} canonical Tailwind issues in ${changed.length} file(s):`);
  for (const file of changed) {
    console.log(` - ${file}`);
  }

  if (!shouldFix) {
    process.exit(1);
  }
} else {
  console.log("No canonical Tailwind issues found.");
}
