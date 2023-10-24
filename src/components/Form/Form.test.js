import { render, cleanup, screen } from "@testing-library/react";
import { Form } from "./Form";

afterEach(cleanup);

it("The form has 2 input fields", () => {
  render(<Form />);
  const inputFields = screen.getAllByRole("textbox");
  expect(inputFields.length).toEqual(2);
});
