import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TreeView, TreeNode } from "../components/TreeView/TreeView";

describe("TreeView", () => {
  it("renders node labels", () => {
    render(
      <TreeView>
        <TreeNode label="Root">
          <TreeNode label="Child" />
        </TreeNode>
      </TreeView>,
    );
    expect(screen.getByText("Root")).toBeInTheDocument();
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  it("uses details/summary for expandable nodes", () => {
    const { container } = render(
      <TreeView><TreeNode label="Parent"><TreeNode label="Leaf" /></TreeNode></TreeView>,
    );
    expect(container.querySelector("details")).toBeInTheDocument();
    expect(container.querySelector("summary")).toBeInTheDocument();
  });
});
