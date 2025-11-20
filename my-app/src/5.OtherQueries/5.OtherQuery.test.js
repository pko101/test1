import { render, screen,within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DataForm from "./DataForm";
test("DataForm calls onSubmit with username and password", async () => {
    const mockOnSubmit = jest.fn();
    render(<DataForm onSubmit={mockOnSubmit} />);

    const usernameInput = screen.getByLabelText(/Username:/i);
    const passwordInput = screen.getByPlaceholderText(/sample placeholder/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "testpassword");
    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
        username: "testuser",
        password: "testpassword"
    });
});
test("label Contents", async () => {
    render(<DataForm />);
    const spanElement = screen.queryByText(/hellow/i);
    expect(spanElement).not.toBeNull();
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveTextContent(/hellow/i);

});
test("getting by label", () => {
    render(<DataForm />);
    const hellowContent = screen.getByLabelText("hellowtesting");
    const sampleButton= within(hellowContent).queryByRole("button");
    expect(sampleButton).not.toBeNull();
    expect(sampleButton).toBeInTheDocument();
})