import React from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const Container = styled.div`
  border-style: solid;
  border-color: 'red';
  margin-bottom: 1rem;
`;

const RawDataList = () => {
  const { loading, error, data } = useQuery(gql`
    {
      cpus {
        company
        model
        socket
      }
    }
  `);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {data.cpus.map((x, i) => {
        return (
          <Container key={i}>
            <p>{x.company}</p>
            <p>{x.model}</p>
            <p>{x.socket}</p>
          </Container>
        );
      })}
    </div>
  );
};

export default RawDataList;
