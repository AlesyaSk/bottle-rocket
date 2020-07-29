import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import { getAllRestaurants } from "./actions/restaurants";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FunctionComponent = () => {
  const restaurants = useSelector((state: any) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  console.log(restaurants);

  return (
      <>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:restaurantName" component={DetailsPage} />
          </Switch>
          <Footer />
      </>
  );
};

export default App;
