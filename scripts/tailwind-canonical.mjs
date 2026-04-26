#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const shouldFix = args.includes("--fix");
const explicitFiles = args.filter((a) => a !== "--fix");

const ignoredDirs = new Set(["node_modules", "dist", ".git", ".storybook"]);
const isTarget = (f) => /\.(tsx?|jsx?)$/.test(f);

function walk(root = "src") {
  const files = [];
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (entry.isDirectory() && !ignoredDirs.has(entry.name)) {
      files.push(...walk(join(root, entry.name)));
    } else if (entry.isFile() && isTarget(entry.name)) {
      files.push(join(root, entry.name));
    }
  }
  return files;
}

const files = explicitFiles.length > 0 ? explicitFiles : walk();

const rules = [
  { regex: /(\b(?:[a-z-]+:)*)(text|bg|border|shadow|ring)-\[var\(--([^)]+)\)\]/g, replacer: "$1$2-(--$3)" },
];

const changed = [];

for (const file of files) {
  const original = readFileSync(file, "utf8");
  let next = original;
  for (const { regex, replacer } of rules) next = next.replace(regex, replacer);
  if (next !== original) {
    changed.push(file);
    if (shouldFix) writeFileSync(file, next, "utf8");
  }
}

if (changed.length > 0) {
  console.log(`${shouldFix ? "Fixed" : "Found issues in"} ${changed.length} file(s):`);
  for (const f of changed) console.log(` - ${f}`);
  if (!shouldFix) process.exit(1);
} else {
  console.log("No canonical Tailwind issues found.");
}
