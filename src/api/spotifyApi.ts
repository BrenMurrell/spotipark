import { SearchResults, SpotifyApi } from "@spotify/web-api-ts-sdk";


export const searchTracks = async (sdk: SpotifyApi, searchString: string): Promise<SearchResults<['track']>> => {
    const results = await sdk.search(searchString, ['track'])
    return results;
}
