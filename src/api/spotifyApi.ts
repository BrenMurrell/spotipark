import { SearchResults, SpotifyApi, Playlist, Page, TrackItem, UserProfile } from "@spotify/web-api-ts-sdk";

// TODO: stop this running when no search string sent (type errors at the moment)
export const searchTracks = async (sdk: SpotifyApi, searchString: string, offset = 0): Promise<SearchResults<['track']>> => {
    const results: SearchResults<['track']> | undefined = await sdk.search(searchString, ['track'], undefined, 20, offset);
    return results;
}

export const fetchUserProfile = async(sdk: SpotifyApi): Promise<UserProfile> => {
    const profile = await sdk.currentUser.profile();
    return profile;
}

export const fetchPlaylists = async(sdk: SpotifyApi, id: string): Promise<Page<Playlist<TrackItem>>> => {
    const results = await sdk.playlists.getUsersPlaylists(id);
    return results;
}
