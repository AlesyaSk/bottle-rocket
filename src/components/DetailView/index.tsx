import React from "react";
import styled from 'styled-components/macro';

import Badge from "../../elements/Badge";
import Map from '../Map';


export interface DetailViewComponentProps {
    restaurant: any;
}

const DetailsView: React.FunctionComponent<DetailViewComponentProps> = ({restaurant}: DetailViewComponentProps) => {

    return (
       <Container>
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
       </Container>
    );
};

export default DetailsView;

const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    animation: slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    background-color: #FFFFFF;
    
    @keyframes slide-in-right {
      0% {
        transform: translateX(1000px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
}
`;

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