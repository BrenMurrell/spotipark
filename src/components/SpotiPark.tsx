import { SearchResults, SpotifyApi } from "@spotify/web-api-ts-sdk";
import React, { Dispatch, SetStateAction } from 'react';
import SearchInput from "./SearchInput";
import { searchTracks } from "../api/spotifyApi";

interface SpotiParkProps {
    sdk?: SpotifyApi
    searchResults?: SearchResults<["track"]> | null;
    setSearchResults: Dispatch<SetStateAction<SearchResults<["track"]> | null>>;
}

const SpotiPark: React.FC<SpotiParkProps> = ({ sdk, searchResults, setSearchResults }) => {

    const onSearch = async (queryString: string) => {
        const results = await searchTracks(sdk!, queryString);
        setSearchResults && setSearchResults(results);
    }

    return sdk && (
        <>
            <h2>Succesfully logged in to SpotiPark</h2>
            <SearchInput onSearch={(queryString) => onSearch(queryString)} />
            { searchResults && searchResults.tracks.items.map((track) => (
                <div key={track.id}>
                    <h3>{track.name}</h3>
                    <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
                </div>
            ))}
        </>
    );
};

export default SpotiPark;