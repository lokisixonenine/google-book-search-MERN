import React from 'react';

const SearchBox =  (props) => {
    return (
        <div className="searchBox">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" placeholder="topic or book title"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;