import React, { useContext } from 'react';
import { SpotiParkContext } from '../Contexts/SpotiParkContext';
import SearchResultItem from "./SearchResultItem";
import './SearchResults.css';

const SearchResultsList: React.FC = () => {
    const context = useContext(SpotiParkContext);
    console.log(context);
    return (
        <div className="search-results">
            {!context?.searchResults && <h2>Search for a track</h2>}

            { context?.searchResults?.tracks?.items.map(result => {
                return <SearchResultItem key={result.id} result={result} />
            })}
        </div>
    );
};

export default SearchResultsList;