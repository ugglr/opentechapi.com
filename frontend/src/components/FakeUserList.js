import React from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const Container = styled.div`
  border-style: solid;
  border-color: red;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 250px;
  border-radius: 25px;
`;

const FakeUserList = () => {
  const { loading, error, data } = useQuery(gql`
    {
      users {
        id
        email
      }
    }
  `);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>List of fake users.</h2>
      {data.users.map(user => {
        return (
          <Container key={user.id}>
            <p>{user.id}</p>
            <p>{user.email}</p>
          </Container>
        );
      })}
    </>
  );
};

export default FakeUserList;
