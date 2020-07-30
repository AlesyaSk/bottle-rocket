import React from "react";
import styled from 'styled-components/macro';

import map from '../../assets/icon_map.png';
import back from '../../assets/ic_webBack.png';

export interface HeaderComponentProps {
    isBackArrowShown: boolean;
    handleClick: () => void;
}

const Header: React.FunctionComponent<HeaderComponentProps> = ({isBackArrowShown, handleClick}: HeaderComponentProps) => {

    return (
        <StyledHeader>
            { isBackArrowShown && <Icon src={back} alt="back" onClick={handleClick} />}
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
         margin: 0 auto;
         
         @media screen and (min-width: 768px) {
          font-size: 24px;
        }
     }
`;

const Icon = styled.img`
    width: auto;
    height: 30px;
`;