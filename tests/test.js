import { render, screen } from "@testing-library/react";
import Form from "../components/form";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("Form component", () => {
  it("clicking on the submit button should call fetch", async () => {
    render(<Form />);
    const submitButton = screen.queryByTestId("submit-warehouse-btn");
    // Assert that the button is rendering on the screen
    expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);
    expect(fetch).toHaveBeenCalledTimes(1);

    // Instead of mocking fetch and asserting that it was called, ideally we would want to test the submit functionality with
  });
});
