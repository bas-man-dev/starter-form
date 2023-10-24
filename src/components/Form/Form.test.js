import { render, cleanup, screen } from "@testing-library/react";
import { Form } from "./Form";

afterEach(cleanup);

it("First name correctly labeled", () => {
  render(<Form />);
  const inputNode = screen.getByLabelText(/First Name/i);
  expect(inputNode).toBeTruthy();
});

it("Family name correctly labeled", () => {
  render(<Form />);
  const inputNode = screen.getByLabelText(/Family Name/i);
  expect(inputNode).toBeTruthy();
});
