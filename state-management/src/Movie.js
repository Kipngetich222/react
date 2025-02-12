import React from "react";

const Movie = (props)=>{
    
    return(
        <>
       <h2>{props.name}</h2>
       <h3>{props.price}</h3>
        </>
    );
}

export default Movie;