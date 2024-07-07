import { SearchResults, SpotifyApi } from "@spotify/web-api-ts-sdk";
import React, { Dispatch, SetStateAction } from 'react';
import SearchInput from "./SearchInput";
import { searchTracks } from "../api/spotifyApi";
import SearchResultsList from "./SearchResultsList";

interface SpotiParkProps {
    sdk?: SpotifyApi
    searchResults?: SearchResults<["track"]> | null;
    setSearchResults: Dispatch<SetStateAction<SearchResults<["track"]> | null>>;
}

const SpotiPark: React.FC<SpotiParkProps> = ({ sdk, searchResults, setSearchResults }) => {

    const onSearch = async (queryString: string) => {
        if(queryString) {
            const results = await searchTracks(sdk!, queryString);
            setSearchResults && setSearchResults(results);
        }
    }

    return sdk && (
        <>
            <h2>Succesfully logged in to SpotiPark</h2>
            <SearchInput onSearch={(queryString) => onSearch(queryString)} />
            <SearchResultsList />
        </>
    );
};

export default SpotiPark;