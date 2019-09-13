import React from 'react';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import RawDataList from './components/RawDataList';
import FakeUserList from './components/FakeUserList';

// ------- END OF IMPORTS ------------

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <RawDataList />
        <FakeUserList />
      </div>
    </ApolloProvider>
  );
};

export default App;
