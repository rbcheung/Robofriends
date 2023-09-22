import React from "react";

const Searchbox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input onChange = {searchChange} className="pa3 ba b--green bg-lightest-blue" type="searh" placeholder="search for Robots"/>
        </div>
        
    )
}

export default Searchbox;