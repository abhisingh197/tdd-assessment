import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

test("it renders with a count of 0 and increments on button click", () => {
  render(<Counter />);

  // Check initial count is 0
  const countDisplay = screen.getByText(/count: 0/i);
  expect(countDisplay).toBeInTheDocument();

  // Simulate button click
  const button = screen.getByRole("button", { name: /increment/i });
  fireEvent.click(button);

  // Check count after click
  const updatedCountDisplay = screen.getByText(/count: 1/i);
  expect(updatedCountDisplay).toBeInTheDocument();

  const resetButton = screen.getByRole("button", { name: /reset/i });
  expect(resetButton).toBeInTheDocument();

  // Click the reset button
  fireEvent.click(resetButton);

  // Verify the count resets to 0
  const resetCountDisplay = screen.getByText(/count: 0/i);
  expect(resetCountDisplay).toBeInTheDocument();
});
