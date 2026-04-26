import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Menu, MenuTrigger, MenuContent, MenuItem } from "../components/Menu/Menu";

describe("Menu", () => {
  it("does not show content initially", () => {
    render(
      <Menu>
        <MenuTrigger>Open</MenuTrigger>
        <MenuContent><MenuItem>Action</MenuItem></MenuContent>
      </Menu>,
    );
    expect(screen.queryByText("Action")).toBeNull();
  });

  it("shows content on trigger click", () => {
    render(
      <Menu>
        <MenuTrigger>Open</MenuTrigger>
        <MenuContent><MenuItem>Action</MenuItem></MenuContent>
      </Menu>,
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("calls onClick and closes on item click", () => {
    const onClick = vi.fn();
    render(
      <Menu>
        <MenuTrigger>Open</MenuTrigger>
        <MenuContent><MenuItem onClick={onClick}>Do it</MenuItem></MenuContent>
      </Menu>,
    );
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Do it"));
    expect(onClick).toHaveBeenCalled();
    expect(screen.queryByText("Do it")).toBeNull();
  });
});
