import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Header } from ".";

function mockWindowWidthHook() {
  const validScreenWidth = 360;
  const setStateMock = jest.fn();
  const useStateMock: any = () => [ validScreenWidth , setStateMock];   
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);
}

describe("header on mobile screens", () => {
  mockWindowWidthHook();

  test("should has a button to show navigation", () => {
    render(<Header />);

    const buttonByRole = screen.getByRole("button");
    expect(buttonByRole).toBeInTheDocument;
  });

  test("should has a nav when click on button", () => {
    render(<Header/>);

    const buttonByRole = screen.getByRole("button");
    fireEvent.click(buttonByRole);
    
    const navByRole = screen.getByRole("navigation");

    expect(navByRole).toBeInTheDocument;
  });
});
