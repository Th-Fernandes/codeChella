import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe('header', () => {
  test('should have a nav element', () => {
    render(<HomePage />);

    const navByRole = screen.getByRole('navigation');
    const navListByRole = screen.getByRole('list');

    expect(navByRole).toBeInTheDocument;
    expect(navListByRole.children).toHaveLength(4);
  });
});