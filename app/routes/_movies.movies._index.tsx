import { type MoviesResponse } from "./interfaces/movies";

import { fetch, type V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { type LoaderFunction } from "react-router";
import { movies_api } from "./db/apis";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Movies" },
    { name: "description", content: "Movies list!" },
  ];
};

export default function Movies() {
  const movies: MoviesResponse = useLoaderData();

  return (
    <div>
      <ul
        className={`
          flex flex-col items-center
          md:grid md:grid-cols-[repeat(auto-fill,230px)] md:gap-4 md:justify-center
      `}
      >
        {movies.results.map((movie) => {
          return (
            <li
              key={movie.id}
              className=" h-[500px] w-fit cursor-pointer hover:opacity-50 hover:-translate-y-5 hover:transition-[0.5s] "
            >
              <Link to={`${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  className="w-[300px] h-96 rounded-r-md"
                  alt={movie.title}
                />
                <div className="text-white">
                  <h1 className=" text-xl text-center ">{movie.title}</h1>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const loader: LoaderFunction = async () => {
  const movies = await fetch(`${movies_api}/discover/movie`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  return movies;
};
