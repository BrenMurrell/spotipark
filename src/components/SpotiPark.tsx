import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import React from 'react';

interface SpotiParkProps {
    sdk?: SpotifyApi
}

const SpotiPark: React.FC<SpotiParkProps> = ({ sdk }) => {
    return (
        <>
            { sdk && (<h2>Succesfully logged into to SpotiPark</h2>)}
        </>
    );
};

export default SpotiPark;