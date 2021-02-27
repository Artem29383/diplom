import React from 'react';
import './../../styles/normalize.css';
import AppRouter from '../AppRouter/AppRouter';
import routes from '../../routes';

const App = () => {
  return <AppRouter routes={routes} />;
};

export default App;
