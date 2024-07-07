import SpotiPark from "../SpotiPark";
import { render } from '@testing-library/react';

describe('SpotiPark', () => {
    it('renders the SpotiPark component', () => {
        const snapshot = render(<SpotiPark />);
        expect(snapshot).toMatchSnapshot();
    });

    it.todo('renders with spotify API SDK')
});