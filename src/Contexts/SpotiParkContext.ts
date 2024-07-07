import { SearchResults } from "@spotify/web-api-ts-sdk";
import React, { createContext } from "react";


interface SpotiParkContextProps {
    searchResults: SearchResults<["track"]> | null;
    setSearchResults: React.Dispatch<React.SetStateAction<SearchResults<["track"]> | null>>;
}

export const SpotiParkContext = createContext<SpotiParkContextProps | null>(null);

