import { Track } from "@spotify/web-api-ts-sdk";
import React from 'react';

interface SearchResultItemProps {
    result: Track
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ result }) => {
    const imageUrl = result.album.images[2].url;
    const { name, artists } = result;
    return (
        <div className="search-result">
            <div className="search-result__image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="search-result__text">
                <h3 className="search-result__title">{name}</h3>
                <p className="search-result__artists">
                    {artists.map(artist => {
                        return <span key={artist.id}><a href={artist.external_urls.spotify}>{artist.name}</a> </span>
                    })}
                </p>
            </div>
            <div className="search-result__actions">
                <button>Add to playlist</button>
            </div>
        </div>
    );
};

export default SearchResultItem;