import React, { useRef } from 'react'
import { useHistory } from 'react-router';

function SearchBar(props) {
    const { submitHandler } = props;
    const termToSearch = useRef(null)
    const history = useHistory()

    const initSearch = (e)=>{
        const currentTermToSearch = termToSearch.current.value;
        submitHandler(currentTermToSearch);
        e.preventDefault();
        history.push('/')
    }

    return (
        <header id='header'>
            <form id='search-form' onSubmit={initSearch}>
                <input
                ref={termToSearch}
                type='text'
                placeholder='🔍 Search...'
                />
            </form>
        </header>
    )
}

export default SearchBar
