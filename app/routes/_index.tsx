import { Link } from "@remix-run/react";

export default function Portada() {
  return (
    <main className="h-screen flex flex-col items-center justify-center  text-center text-purple-500">
      <h1 className="text-center text-5xl mb-8">Movies 🎥</h1>

      <Link className="text-white underline mt-2" to="/movies">
        Ver el catalogo de peliculas.
      </Link>
    </main>
  );
}
