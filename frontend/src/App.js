import React from 'react';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import RawDataList from './components/RawDataList';

// ------- END OF IMPORTS ------------

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Hello from React</h1>
        <RawDataList />
      </div>
    </ApolloProvider>
  );
};

export default App;
