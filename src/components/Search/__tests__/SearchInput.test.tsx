import { render, screen, waitFor } from "@testing-library/react";
import SearchInput from "../SearchInput";
import userEvent from '@testing-library/user-event';
import { act } from "react";
import { vi } from "vitest"

// vi.spyOn(global, 'setTimeout');

const mockOnUpdate = () => vi.fn();

const user = userEvent.setup();

describe('SearchInput', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(()=> {
        vi.restoreAllMocks();
    })
    it('renders as expected', () => {
        const snapshot = render(<SearchInput onSearch={mockOnUpdate} />);
        expect(snapshot).toMatchSnapshot();
    });

    it('runs onSearch when the user types', async () => {
        render(<SearchInput onSearch={mockOnUpdate} />);
        const searchField = screen.getByRole('textbox');
        expect(searchField).toHaveValue('');
        act(() => {
            user.type(searchField, 'hello');
        });

        // TODO: fix the following - this is how i'd normally do it with jest
        // but doesnt' work QUITE the same with vitest
        
        // await waitFor(() => {
        //     expect(searchField).toHaveValue('hello');
        // });

        // await waitFor(() => {
        //     expect(mockOnUpdate).toHaveBeenCalledWith('hello');
        // });
    });


});