import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItems=actors.map((actor) => (
       <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <h3>Movies: </h3>
        <ul> 
          {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    ))
  return <div>
    <h1>Actors Page</h1>
    {actorsItems}
  </div>;
}

export default Actors;
