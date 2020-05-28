import React from 'react';

const SearchBox =  (props) => {
    return (
        <div className="searchBox">
            <form action="">
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;