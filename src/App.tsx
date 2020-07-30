import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import DetailView from './components/DetailView';
import Header from "./components/Header";
import {getAllRestaurants} from "./actions/restaurants";
import ListView from "./components/ListView";

const App: React.FunctionComponent = () => {
    const restaurants = useSelector((state: any) => state.restaurants);
    const dispatch = useDispatch();
    const [selectedRestaurant, setSelectedRestaurant] = useState();

    useEffect(() => {
        dispatch(getAllRestaurants());
    }, [dispatch]);

  return (
      <>
        <Header />
        <ListView restaurantsList={restaurants.list} clickHandler={setSelectedRestaurant} />
        <DetailView restaurant={selectedRestaurant}/>
      </>
  );
};

export default App;
