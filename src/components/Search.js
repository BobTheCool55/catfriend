import React from "react";

const Search = (Component) => {
    const {searchChangeName, searchChangeGmail} = Component;
    return (
        <div>
            <input className="pa3 br3 ma3 ba b--green bg-lightest-blue" type='search' placeholder='Search a cat by name' onChange={searchChangeName}/>
            <input className="pa3 br3 ma3 ba b--green bg-lightest-blue" type='search' placeholder='Search a cat by Gmail' onChange={searchChangeGmail}/>
        </div>
    );
}

export default Search;