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

    // Simulate a user clicking on the submit button
    await userEvent.click(submitButton);

    const successMessage = screen.queryByText(
      "New warehouse submitted successfully"
    );
    // Assert that the success message is now rendering on the screen
    expect(successMessage).toBeInTheDocument();
    // Assert that fetch has been called once
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
