import React from "react";
import Cat from './cat';

const cardlist = ({ robots }) => {
    // if (true) {
    //     throw new Error('L bozo website')
    // }
    const CardList = robots.map((user, index) => {
        return <Cat key ={robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    });
    return (
        CardList
    );
}

export default cardlist;