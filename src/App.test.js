import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the page heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
});
