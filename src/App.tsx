import './App.css'
import { useSpotify } from "./hooks/useSpotify"
import { Scopes } from "@spotify/web-api-ts-sdk"
import SpotiPark from "./components/SpotiPark"

function App() {
    const sdk = useSpotify(
        import.meta.env.VITE_SPOTIFY_CLIENT_ID, 
        import.meta.env.VITE_REDIRECT_TARGET, 
        Scopes.all
    );
    return (
        <>
            <h1>SpotiPark</h1>
            { sdk
                ? <SpotiPark sdk={sdk} />
                : <h2>You are not logged in</h2>
            }

        </>
    )
}

export default App
