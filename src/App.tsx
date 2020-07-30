import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components/macro';

import DetailView from './components/DetailView';
import Header from "./components/Header";
import {getAllRestaurants} from "./actions/restaurants";
import ListView from "./components/ListView";

const App: React.FunctionComponent = () => {
    const restaurants = useSelector((state: any) => state.restaurants);
    const dispatch = useDispatch();
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllRestaurants());
    }, [dispatch]);

  return (
      <>
        <Header isBackArrowShown={isDetailViewOpen} handleClick={() => {setIsDetailViewOpen(false); document.body.style.overflow = "";}}/>
        <Content>
            <ListView restaurantsList={restaurants.list} clickHandler={(restaurant) => {setSelectedRestaurant(restaurant); setIsDetailViewOpen(true); document.body.style.overflow = "hidden"; window.scrollTo(0, 0);}} />
            <DetailView restaurant={selectedRestaurant} isOpen={isDetailViewOpen}/>
        </Content>
      </>
  );
};

export default App;

const Content = styled.div`
  position: relative;
`;
