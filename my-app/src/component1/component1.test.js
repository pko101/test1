import { render, screen } from '@testing-library/react';
import { Component1 } from './component1';
describe('Component1', () => {
    it('should render Component1 correctly', () => {
        render(<Component1 />);
        const element = screen.getByText(/this is component 1/i);
        expect(element).toBeInTheDocument();
    });
    test("how to get all elements by role", () => {
        render(<Component1 />);
        const component = screen.getByRole("heading", {

            name: /this is/i
        });
        console.debug(component.textContent);
        const link = screen.getByRole("link", {
            name: /This is/
        });
        expect(link).toHaveAttribute('href',"https://example.com");

        const getElement=screen.getByRole("listitem",{
            name:/Unordered/i
        })
    });
});