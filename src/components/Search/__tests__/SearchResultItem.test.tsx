import { render, screen } from "@testing-library/react";
import SearchResultItem from "../SearchResultItem";
// import { Track, TrackItem } from "@spotify/web-api-ts-sdk";
import mockSearchResults from '../../../mocks/search-results.json';

describe('SearchResultItem', () => {
    it('renders', () => {
        render(<SearchResultItem result={mockSearchResults.tracks.items[0]}/>);
        expect(screen.getByRole('heading', { level: 3}).textContent).toEqual('Echoes');
    });
});