import { render, screen } from "@testing-library/react"
import Home from "./page"

test('should pass', () => {
  render(<Home/>)

  const buttonByRole = screen.getByRole('button')
  console.log(buttonByRole)

  expect(buttonByRole).toBeInTheDocument;
})