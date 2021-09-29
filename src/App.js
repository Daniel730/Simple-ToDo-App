import React from 'react';
import { Provider } from 'react-redux';
import { Container } from './components/global';
import HeaderComponent from './components/HeaderComponent';
import List from './pages/List';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <HeaderComponent />
        <List />
      </Container>
    </Provider>
  );
}

export default App;
