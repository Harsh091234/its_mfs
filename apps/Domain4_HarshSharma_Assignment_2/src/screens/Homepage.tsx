
import MovieCardContainer from "@/components/MovieCardContainer";

import { trendingMovies } from "@/constants";


const Homepage = () => {


  return (
    <div className=" min-h-svh p-3">
      <div className="flex gap-8 flex-wrap">
        {trendingMovies.map((title) => (
          <MovieCardContainer key={title} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
