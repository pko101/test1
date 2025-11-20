import { render, screen } from '@testing-library/react';
import { AccessibleName } from './AccessibleElement';
import user from '@testing-library/user-event';
test("is Element avaialble", async () => {
    render(<AccessibleName></AccessibleName>);
    const submitButton = screen.getByRole("button", {
        name: /Submit/i
    })
    const cancelButton = screen.getByRole("button", { name: /cancel/i })
    expect(submitButton).toBeInTheDocument();
    const textBox = screen.getByRole("textbox",{
        name:/sampleLabel/i
    })
    user.click(textBox);
    user.type(textBox ,"John Doe");
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveValue("John Doe");
})