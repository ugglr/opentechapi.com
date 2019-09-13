import React from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const Container = styled.div`
  border-style: solid;
  border-color: red;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 150px;
  border-radius: 25px;
`;

const RawDataList = () => {
  const { loading, error, data } = useQuery(gql`
    {
      cpus {
        id
        manufacturer
        model
        socket
      }
    }
  `);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2>List of CPUs.</h2>
      {data.cpus.map(x => {
        return (
          <Container key={x.id}>
            <p>{x.manufacturer}</p>
            <p>{x.model}</p>
            <p>{x.socket}</p>
          </Container>
        );
      })}
    </>
  );
};

export default RawDataList;
