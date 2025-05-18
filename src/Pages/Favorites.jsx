import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Utility/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://movie-mania-server-g47p.onrender.com/favorite/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFavoriteMovies(data);
      });
  }, [user]);

  const handleDeleteFavorite = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This movie will be removed from your favorites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9B5DE5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://movie-mania-server-g47p.onrender.com/favorite/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Movie removed from favorites!", "success");

              const remaining = favoriteMovies.filter(
                (movie) => movie._id !== _id
              );
              setFavoriteMovies(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#9B5DE5] mb-6 text-center">
          Your Favorite Movies
        </h2>

        {favoriteMovies.length === 0 ? (
          <p className="text-center text-gray-400 text-2xl">
            No favorite movies added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteMovies.map((movie) => (
              <div
                key={movie._id}
                className="bg-[#1A1A1A] p-3 rounded-md shadow-lg border border-[#9B5DE5] flex items-center gap-4 transform transition duration-300 hover:scale-105"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-1/2 xl:h-64 lg:h-56 h-64 object-cover rounded-lg cursor-pointer"
                  onClick={() => navigate(`/movie-details/${movie._id}`)}
                />
                <div className="w-1/2">
                  <h2
                    className="text-[#9B5DE5] xl:text-2xl lg:text-xl text-2xl font-bold font-bebas cursor-pointer hover:underline"
                    onClick={() => navigate(`/movie-details/${movie._id}`)}
                  >
                    {movie.Title}
                  </h2>
                  <p className="text-white xl:text-sm lg:text-xs text-sm font-pacifico">
                    {movie.Genre}
                  </p>
                  <p className="text-white xl:text-sm lg:text-xs text-sm">
                    Duration: {movie.Duration} min
                  </p>
                  <p className="text-white xl:text-sm lg:text-xs text-sm">
                    Release Year: {movie.ReleaseYear}
                  </p>
                  <p className="text-yellow-400 xl:text-sm lg:text-xs text-sm font-bold">
                    Rating: {movie.Rating}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleDeleteFavorite(movie._id)}
                      className="w-full py-2 xl:text-base lg:text-sm text-base bg-red-600 hover:bg-red-800 text-white font-bold rounded-lg shadow-md transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
