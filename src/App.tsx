import './App.css'
import React from "react";
import { useSpotify } from "./hooks/useSpotify"
import { Scopes, SearchResults } from "@spotify/web-api-ts-sdk"
import SpotiPark from "./components/SpotiPark"
import { SpotiParkContext } from "./Contexts/SpotiParkContext";

function App() {
    const [ searchResults, setSearchResults ] = React.useState<SearchResults<["track"]> | null>(null);
    
    const sdk = useSpotify(
        import.meta.env.VITE_SPOTIFY_CLIENT_ID, 
        import.meta.env.VITE_REDIRECT_TARGET, 
        Scopes.all
    );
    return (
        <SpotiParkContext.Provider value={ { searchResults, setSearchResults }}>
            <h1>SpotiPark</h1>
            { sdk
                ? <SpotiPark sdk={sdk} searchResults={searchResults} setSearchResults={setSearchResults} />
                : <h2>You are not logged in</h2>
            }
        </SpotiParkContext.Provider>
    )
}

export default App
