import { useState, useEffect, Suspense } from 'react';
import { getMoviesDetails } from 'services/ApiGet';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { Div } from './MoviesDetails.styled';

function MoviesDetails() {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const location = useLocation;

  useEffect(() => {
    getMoviesDetails(movieId).then(({ data }) => {
      setMovies(data);
    });
  }, [movieId]);

  const { title, poster_path, genres, release_data, overview } = movies;
  console.log(location.state);
  return (
    <Div>
      <Link to="/" className="backLink">
        <span>Go back</span>
      </Link>

      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

        <div className="details-wrapper">
          <h2>{title}</h2>
          <p className="overview">{overview}</p>
          {release_data ? (
            <p>
              <b>Release date:</b> {release_data}
            </p>
          ) : null}

          {genres?.length ? (
            <div>
              <p className="genres-title">Genres</p>

              <ul className="genres">
                {genres.map(({ id, name }) => {
                  return (
                    <li key={id} className="genre">
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          <ul className="links">
            <li>
              <NavLink
                to={'cast'}
                state={{ from: location.state?.from }}
                className="cast"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'reviews'}
                state={{ from: location.state?.from }}
                className="reviews"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </Div>
  );
}

export default MoviesDetails;
