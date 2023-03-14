import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Header from ".";
/*
  problema:
    eu estou mockando o useIsMobileNavOpened errado, gerando um falso positivo no teste
    n faço a menor ideia de como posso solucionar esse problema, então talbez seja hora
    de entender melhor as bases do jest e testing library para resolver esse problema.
*/

let mockNavState = false;
let mockToggleNavState = () => mockNavState = !mockNavState;

jest.mock("./hooks/useIsMobileNavOpened", () => {
  return jest.fn(() => ({
    isMobileNavOpened: mockNavState,
    toggleMobileNavOpened: mockNavState,
  }));
});

function mockWindowWidthHook(validScreenWidth: number) {
  const setStateMock = jest.fn();
  const useStateMock: any = () => [validScreenWidth, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);
}

describe("header on mobile screens", () => {
  beforeEach(() => {
    mockWindowWidthHook(365);
    mockToggleNavState();
  });

  afterEach(() => {
    jest.clearAllMocks();
    mockToggleNavState();
  });

  test("should has a button to show navigation", () => {
    render(<Header />);

    const buttonByRole = screen.getByRole("button");
    expect(buttonByRole).toBeInTheDocument;
  });

  test("should has a nav when click on button", () => {
    

    render(<Header />);

    const buttonByRole = screen.getByRole("button");
    fireEvent.click(buttonByRole);

    const navByRole = screen.getByRole("navigation");

    expect(navByRole).toBeInTheDocument;
  });
});

describe("header on greater or equal to tablet screens", () => {
  beforeEach(() => {
    mockWindowWidthHook(768);
  });

  test("should has a nav menu", () => {
    render(<Header />);

    const navByRole = screen.getByRole("navigation");
    expect(navByRole).toBeInTheDocument;
  });
});
