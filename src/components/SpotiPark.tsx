import React, { useContext } from 'react';
import SearchInput from "./Search/SearchInput";
import { searchTracks } from "../api/spotifyApi";
import SearchResultsList from "./Search/SearchResultsList";
import PlaylistsList from "./PlaylistsList";
import { SpotiParkContext } from "../Contexts/SpotiParkContext";

const SpotiPark: React.FC = () => {
    const context = useContext(SpotiParkContext);
    const { sdk, setSearchResults, userProfile } = context!;

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
            { userProfile && <PlaylistsList /> }
        </>
    );
};

export default SpotiPark;