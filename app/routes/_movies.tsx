import { Link, Outlet } from "@remix-run/react";

export default function MoviesLayout() {
  return (
    <div className="pt-8 text-purple-300">
      <Link to="/movies">
        <h1 className="text-center text-5xl mb-8">Movies 🎥</h1>
      </Link>

      <Outlet />
    </div>
  );
}
