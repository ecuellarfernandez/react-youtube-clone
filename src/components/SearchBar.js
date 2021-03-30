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
        <form onSubmit={initSearch}>
            <input
            ref={termToSearch}
            type='text'
            />
        </form>
    )
}

export default SearchBar
