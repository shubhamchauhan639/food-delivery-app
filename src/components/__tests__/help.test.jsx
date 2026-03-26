import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Help from "../Help";

test("renders main heading", () => {
  render(<Help />);

  const heading = screen.getByRole("heading", {
    name: /help & support/i,
    level: 1,
  });

  expect(heading).toBeInTheDocument();
});

test("renders search input", () => {
  render(<Help />);

  const input = screen.getByPlaceholderText(/search your issue/i);
  expect(input).toBeInTheDocument();
});

test("renders help topics list", () => {
  render(<Help />);

  const topics = screen.getAllByRole("listitem");
  expect(topics.length).toBe(7);
});

test("renders support button", () => {
  render(<Help />);

  const button = screen.getByRole("button", {
    name: /chat with support/i,
  });

  expect(button).toBeInTheDocument();
});