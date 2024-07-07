import React, { useEffect, useState } from 'react';

interface SearchInputProps {
    onSearch: (queryString: string) => void; // update search results
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [queryString, setQueryString] = useState<string>('');
    
    useEffect(() => {
        // only run search after user stops typing for 1 second
        const timer = setTimeout(() => {
            onSearch(queryString);
        }, 1000);

        // use useEffect callback to clear timer (resets timer on every keypress)
        return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryString])
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // set local state of queryString when typing
        setQueryString(event.target.value);
    };

    return (
        <div>
            <input type="text" value={queryString} onChange={handleInputChange} />
        </div>
    );
};

export default SearchInput;