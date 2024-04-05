import { useState } from 'react';
import Button from '../atoms/button/Button';
const SearchBar = ({ onHandleSearch, query, setQuery }) => {

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                value={query}
                onInput={(e) => setQuery(query => e.target.value)}
                onKeyDown={(e) => {e.key === 'Enter' && onHandleSearch(e)}}
            />
            <Button style='primary-btn' onClick={onHandleSearch}>Search</Button>
        </div>
    );
}

export default SearchBar;