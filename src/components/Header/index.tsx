import React from "react";
import styled from 'styled-components/macro';

const Header: React.FunctionComponent = () => {

    return (
        <StyledHeader>
            <span>Lunch Tyme</span>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #43E895;
  padding: 30px 0 14px;
  text-align: center;

     span {
         font-size: 17px;
         font-family: 'Avenir Next Demi', sans-serif;
         color: #FFFFFF;
     }
`;