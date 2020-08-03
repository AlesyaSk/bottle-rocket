import React from "react";
import styled from "styled-components/macro";

import Card from "../../components/Card";

type location = {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: Array<string>;
};

type contact = {
  formattedPhone: string;
  twitter: string;
  phone: number;
};

type restaurant = {
  name: string;
  category: string;
  location: location;
  contact: contact;
  backgroundImageURL: string;
};

export interface ListViewComponentProps {
  restaurantsList: Array<restaurant>;
  clickHandler: (restaurant: restaurant) => void;
}

const ListView: React.FunctionComponent<ListViewComponentProps> = ({
  restaurantsList,
  clickHandler,
}: ListViewComponentProps) => {
  return (
    <RestaurantsList>
      {restaurantsList &&
        restaurantsList.map((restaurant: restaurant) => (
          <Card
            name={restaurant.name}
            img={restaurant.backgroundImageURL}
            category={restaurant.category}
            key={restaurant.name}
            handleClick={() => clickHandler(restaurant)}
          />
        ))}
    </RestaurantsList>
  );
};

export default ListView;

const RestaurantsList = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    > div {
      flex: 1 1 50%;
      max-width: 50%;
    }
  }
`;
