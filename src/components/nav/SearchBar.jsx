import { useState, useRef, useEffect } from 'react';
import Button from '../atoms/button/Button';
const SearchBar = ({ onHandleSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const searchBarInput = useRef(null);

    useEffect(() => {
        searchBarInput.current.focus();
    }, [])

    const onSearch = (e, searchTerm) => {
        e.preventDefault();
        onHandleSearch(e, searchTerm);
        setSearchTerm(searchTerm => '');
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                value={searchTerm}
                onInput={(e) => setSearchTerm(searchTerm => e.target.value)}
                onKeyDown={(e) => {e.key === 'Enter' && onSearch(e, searchTerm)}}
                ref={searchBarInput}
            />
            <Button style='primary-btn' onClick={e => {onSearch(e, searchTerm)}}>Search</Button>
        </div>
    );
}

export default SearchBar;