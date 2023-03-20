import { render, screen } from "@testing-library/react";
import { Heading } from ".";

describe('Heading component', () => {
  test('should has h2', () => {
    render(<Heading as="h1" size='md'>Hello world</Heading>);

    const h2 = screen.queryByRole('heading');
    expect(h2).toBeInTheDocument();
  });
});