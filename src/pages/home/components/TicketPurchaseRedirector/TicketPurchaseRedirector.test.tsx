import { fireEvent, render, screen } from "@testing-library/react";
import { TicketPurchaseRedirector } from ".";

const mockUseRouter = jest.fn();

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      push: mockUseRouter
    })
  };
});

describe('TicketPurchaseRedirector component', () => {
  test('should call redirector hook when click on button', () => {
    render(<TicketPurchaseRedirector />);

    const redirectorButton = screen.getByRole('button');
    fireEvent.click(redirectorButton);  

    expect(mockUseRouter).toBeCalledTimes(1);
  });
});