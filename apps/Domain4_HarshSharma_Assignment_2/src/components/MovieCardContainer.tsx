// MovieCardContainer.tsx
import MovieCard from "@/components/MovieCard";
import { useGetMovieDetailsQuery } from "@/services/api";

interface Props {
  title: string;
}

const MovieCardContainer = ({ title }: Props) => {
  const { data, isLoading, error } = useGetMovieDetailsQuery(title);

  if (isLoading) return null;
  if (error || !data || data.Response === "False") return null;

  return (
    <MovieCard
      title={data.Title}
      posterUrl={data.Poster}
      releaseDate={data.Released}
      rating={Number(data.imdbRating)}
      genres={data.Genre.split(",")}
      overview={data.Plot}
    />
  );
};

export default MovieCardContainer;
