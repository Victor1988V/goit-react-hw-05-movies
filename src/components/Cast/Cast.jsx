import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesCredits } from 'services/ApiGet';
import { Div } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesCredits(movieId).then(({ data }) => setCast(data.cast));
  }, [movieId]);
  console.log(cast);

  return (
    <Div>
      <h3>CAST</h3>

      <ul>
        {cast.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width="200"
                alt={name}
              />
              <p>
                <b>Character:</b> {character}
              </p>
              <p>
                <b>Acrtor:</b> {name}
              </p>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}

export default Cast;
