import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from './logo.svg';
import './App.scss';
import { getAllRestaurants } from "./actions/restaurants";

const App: React.FunctionComponent = () => {
  const restaurants = useSelector((state: any) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  console.log(restaurants);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
