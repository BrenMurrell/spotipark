import { SearchResults, SpotifyApi } from "@spotify/web-api-ts-sdk";

// TODO: stop this running when no search string sent (type errors at the moment)
export const searchTracks = async (sdk: SpotifyApi, searchString: string): Promise<SearchResults<['track']>> => {
        const results: SearchResults<['track']> | undefined = await sdk.search(searchString, ['track']);
        return results;
}
