import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
      yearOfPublication
    }
  }
`;

function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);

  if (loading) {
    return <h1>Data is Loading</h1>;
  }

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {data.users &&
        data.users.map((user) => {
          return (
            <div>
              <h1>Name:{user.name}</h1>
              <h1>Username: {user.username}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality:{user.nationality}</h1>
            </div>
          );
        })}
      <div>
        {movieData &&
          movieData.movies.map((movie) => {
            return (
              <div>
                <h1>Movie:{movie.name}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DisplayData;
