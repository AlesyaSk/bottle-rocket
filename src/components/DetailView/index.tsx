import React from "react";
import styled from 'styled-components/macro';

import Badge from "../../elements/Badge";

import Map from '../Map';


export interface DetailViewComponentProps {
    restaurant: any;
}

const DetailsView: React.FunctionComponent<DetailViewComponentProps> = ({restaurant}: DetailViewComponentProps) => {

    return (
       <>
           {restaurant?.location &&
           <>
               <Map location={restaurant.location} zoomLevel={10}/>
               <StyledBadge name={restaurant.name} category={restaurant.category} className />
               <Contacts>
                   <p>{restaurant.location.address}</p>
                   <p>{restaurant.contact.formattedPhone}</p>
                   <p>{`@${restaurant.contact.twitter}`}</p>
               </Contacts>
           </>}
       </>
    );
};

export default DetailsView;

const Contacts = styled.div`
  margin-top: 16px;
  padding: 0 12px;
  font-size: 16px;
  width: 70%;
  
  p {
    margin-bottom: 26px;
  }
`;

const StyledBadge = styled(Badge)`
  background-color: #34B379;
`;