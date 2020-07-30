import React from "react";
import styled from 'styled-components/macro';

import map from '../../assets/icon_map.png';
import back from '../../assets/ic_webBack.png';

const Header: React.FunctionComponent = () => {

    return (
        <StyledHeader>
            <Icon src={back} alt="back" />
            <span>Lunch Tyme</span>
            <Icon src={map} alt="map" />
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #43E895;
  padding: 30px 15px 14px;

     span {
         font-size: 17px;
         font-family: 'Avenir Next Demi', sans-serif;
         color: #FFFFFF;
     }
`;

const Icon = styled.img`
    width: auto;
    height: 30px;
`;