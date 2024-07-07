import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import React from 'react';
import SearchInput from "./SearchInput";

interface SpotiParkProps {
    sdk?: SpotifyApi
}

const SpotiPark: React.FC<SpotiParkProps> = ({ sdk }) => {
    return sdk && (
        <>
            <h2>Succesfully logged in to SpotiPark</h2>
            <SearchInput onSearch={(queryString) => console.log('searching for:', queryString)} />
        </>
    );
};

export default SpotiPark;