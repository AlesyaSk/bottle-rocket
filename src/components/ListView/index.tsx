import React from "react";
import styled from "styled-components/macro";

import Card from "../../components/Card";

export interface ListViewComponentProps {
  restaurantsList: any;
  clickHandler: (restaurant: any) => void;
}

const ListView: React.FunctionComponent<ListViewComponentProps> = ({
  restaurantsList,
  clickHandler,
}: ListViewComponentProps) => {
  return (
    <RestaurantsList>
      {restaurantsList &&
        restaurantsList.map((restaurant: any) => (
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
