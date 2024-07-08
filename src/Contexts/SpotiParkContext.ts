import { SearchResults, SpotifyApi, UserProfile } from "@spotify/web-api-ts-sdk";
import React, { createContext } from "react";


interface SpotiParkContextProps {
    searchResults: SearchResults<["track"]> | null;
    setSearchResults: React.Dispatch<React.SetStateAction<SearchResults<["track"]> | null>>;
    userProfile: UserProfile | null;
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
    sdk: SpotifyApi | null;
}

export const SpotiParkContext = createContext<SpotiParkContextProps | null>(null);

