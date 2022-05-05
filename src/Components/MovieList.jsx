import React from "react";
import MovieCard from "./MovieCard";
import poster1 from "./asset/poster1.jpg";
import poster2 from "./asset/poster2.jpg";
import poster3 from "./asset/poster3.jpg";

const MovieList = () => {
  return (
    <div className="movie-list" style={{ display: "flex" }}>
      <MovieCard
        posterURL={poster1}
        title="The Hill"
        rating="4.8"
        description="Awesome watch! You'd be glad you saw it."
      />
      <MovieCard
        posterURL={poster2}
        title="Archer"
        rating="4.7"
        description="Pretty badass. Women too can be deadly when driven by vengeance!"
      />
      <MovieCard
        posterURL={poster3}
        title="Black Panther"
        rating="4.5"
        description="From Wakanda to the world! AFrica the greatest!"
      />
    </div>
  );
};

export default MovieList;
