import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";
import { act } from "react";
import { vi } from "vitest";

const user = userEvent.setup();
const mockOnClick = vi.fn();

describe('Button', () => {
    it('renders with a title', () => {
        render(<Button label="Click me" />);
        expect(screen.getByRole('button').textContent).toEqual('Click me');
    });
    it('runs onClick when clicked', async () => {
        render(<Button label="Click me" onClick={mockOnClick} />);
        act(() => {
            user.click(screen.getByRole('button'));
        })
        await waitFor(() => {
            expect(mockOnClick).toHaveBeenCalled();
        });
    });
});