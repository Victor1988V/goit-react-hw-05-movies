import { useState, useEffect } from 'react';
import { gethMoviesSearch } from 'services/ApiGet';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Div } from './Movies.styled';

function Movies() {
  const [result, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query' || '');
  const location = useLocation();

  const handlSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements.movie.value);

    const search = event.target.elements.movie.value;
    setSearchParams(search !== '' ? { query: search } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    gethMoviesSearch(query).then(({ data: { results } }) => {
      setResults(results);
    });
  }, [query]);

  console.log('search result:', result);

  return (
    <Div>
      <form onSubmit={handlSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {result.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}

export default Movies;
