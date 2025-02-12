import React,{useState} from "react";
import Movie from "./Movie";

const MovieList = ()=>{
    const [movies] = useState([
        {
            name: "Henry Potter",
            price: "$40",
            id: 23432
        },
        {
            name: "Yegon K",
            price: "$70",
            id: 23343
        },
        {
            name: "Games in field",
            price: "$30",
            id: 22322
        }

    ]
    )
    return(
        <>
        {
            movies.map(
                movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.id}/>
                )
            )
        }
        </>
    );
}

export default MovieList;