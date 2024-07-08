import React, { useContext, useEffect, useState } from 'react';
import { fetchPlaylists } from "../api/spotifyApi";
import { Playlist } from "@spotify/web-api-ts-sdk";
import { SpotiParkContext } from "../Contexts/SpotiParkContext";

const PlaylistsList: React.FC = () => {
    const context = useContext(SpotiParkContext);
    const { sdk, userProfile } = context!;
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const getPlaylists = async () => {
        console.log('getting playlists');
        if(sdk && userProfile) {
            const playlists = await fetchPlaylists(sdk!, userProfile!.id);
            setPlaylists(playlists.items);
        }
    }
    useEffect(() => {    
        getPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 


    return (
        <>
            <h2>Playlists</h2>
            <ul>
                {playlists.map(playlist => (
                    <li key={playlist.id}>{playlist.name}</li>
                ))}
            </ul>
        </>
    );
};

export default PlaylistsList;