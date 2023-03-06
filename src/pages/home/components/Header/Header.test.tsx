import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from ".";

describe("header", () => {
  test("should has a button to show navigation on mobile screens", () => {
    function mockWindowWidthHook() {
      const validScreenWidth = 360;
      const setStateMock = jest.fn();
      const useStateMock: any = () => [ validScreenWidth , setStateMock];   
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    }

    mockWindowWidthHook();
    render(<Header />);

    const buttonByRole = screen.getByRole("button");
    expect(buttonByRole).toBeInTheDocument;
  });
});
