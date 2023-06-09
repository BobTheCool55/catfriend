import React from "react";

const cat = ({ name, email, id}) => {
    return (
        <div className="bg-light-green dib gr3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`}  alt="cat image"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default cat;