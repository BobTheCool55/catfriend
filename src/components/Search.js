import React from "react";

const Search = (Component) => {
    const {searchChange} = Component;
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder='Search a cat' onChange={searchChange}/>
        </div>
    );
}

export default Search;