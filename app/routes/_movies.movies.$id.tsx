import { type Movie } from "./interfaces/movies";
import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { movies_api } from "./db/apis";

export default function MovieInfo() {
  const movieInfo: Movie = useLoaderData();

  return (
    <main className="flex flex-col items-center container mx-auto md:flex-row md:gap-8">
      <img
        className="w-[300px] rounded-md "
        src={"https://image.tmdb.org/t/p/w300" + movieInfo.poster_path}
        alt={movieInfo.title}
      />
      <div className="text-white p-4">
        <p className="text-2xl text-purple-300">
          <strong>Title:</strong>
          {movieInfo.title}
        </p>

        <div>
          <ul>
            <strong>Genero: </strong>
            {movieInfo.genres.map((genero) => {
              return <li key={genero.id}> - {genero.name}</li>;
            })}
          </ul>
        </div>

        <div>
          <strong>Description:</strong>
          {movieInfo.overview}
        </div>
      </div>
    </main>
  );
}

export const loader: LoaderFunction = ({ params }) => {
  const id = params.id;

  const movies = fetch(`${movies_api}/movie/${id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  return movies;
};
