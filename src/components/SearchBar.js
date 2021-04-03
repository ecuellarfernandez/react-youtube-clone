import React, { useRef } from 'react'

function SearchBar(props) {
    const { submitHandler } = props;
    const termToSearch = useRef(null)

    const initSearch = (e)=>{
        const currentTermToSearch = termToSearch.current.value;
        submitHandler(currentTermToSearch);
        e.preventDefault();
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
