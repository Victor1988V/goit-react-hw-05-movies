import { useState, useEffect } from 'react';
import { getMoviesTranding } from 'services/ApiGet';
import { Link, useLocation } from 'react-router-dom';
import { Heading, UL } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesTranding().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  console.log(movies);

  return (
    <>
      <Heading>Tranding to day</Heading>
      <UL>
        {movies.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {/* <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              /> */}
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </UL>
    </>
  );
}

export default Home;
