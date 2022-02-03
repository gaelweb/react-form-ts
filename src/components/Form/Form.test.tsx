import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("if input has firstname value", () => {
  render(<Form />);
  const linkElement = screen.getByText("Firstname");
  expect(linkElement).toBeInTheDocument();
});
