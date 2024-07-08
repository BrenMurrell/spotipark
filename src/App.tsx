import './App.css'
import React, { useEffect } from "react";
import { useSpotify } from "./hooks/useSpotify"
import { Scopes, SearchResults, UserProfile } from "@spotify/web-api-ts-sdk"
import SpotiPark from "./components/SpotiPark"
import { SpotiParkContext } from "./Contexts/SpotiParkContext";
import { fetchUserProfile } from "./api/spotifyApi";

function App() {
    const [ searchResults, setSearchResults ] = React.useState<SearchResults<["track"]> | null>(null);
    const [ userProfile, setUserProfile ] = React.useState<UserProfile | null>(null);
    const sdk = useSpotify(
        import.meta.env.VITE_SPOTIFY_CLIENT_ID, 
        import.meta.env.VITE_REDIRECT_TARGET, 
        Scopes.all
    );

    useEffect(() => {
        sdk && fetchUserProfile(sdk)
            .then((profile) => setUserProfile(profile));
    }, [sdk])

    return (
        <SpotiParkContext.Provider value={ { searchResults, setSearchResults, userProfile, setUserProfile, sdk }}>
            <h1>SpotiPark</h1>
            { sdk
                ? <SpotiPark />
                : <h2>You are not logged in</h2>
            }
        </SpotiParkContext.Provider>
    )
}

export default App
