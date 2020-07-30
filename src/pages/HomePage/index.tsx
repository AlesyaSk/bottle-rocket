import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {getAllRestaurants} from "../../actions/restaurants";

import Card from "../../components/Card";
import Map from "../../components/Map";

const HomePage: React.FunctionComponent = () => {
    const restaurants = useSelector((state: any) => state.restaurants);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRestaurants());
    }, [dispatch]);

    return (
        <>
            {restaurants?.list &&
                <>
                    {restaurants.list.map((restaurant: any) =>
                        <>
                            <Link to={`/${restaurant.name}`}  key={restaurant.name}>
                                <Card name={restaurant.name} img={restaurant.backgroundImageURL}
                                 category={restaurant.category} />
                            </Link>
                            <Map location={restaurant.location} zoomLevel={10}/>
                        </>
                    )}
                </>
            }
        </>
    );
};

export default HomePage;