import React from "react";
import styled from 'styled-components/macro';

const Footer: React.FunctionComponent = () => {

    return (
        <StyledFooter>
            <span>Lunch Tyme</span>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  background-color: #2A2A2A;
  padding: 30px 0 14px;
  text-align: center;

     span {
         font-size: 17px;
         font-family: 'Avenir Next Demi', sans-serif;
         color: #FFFFFF;
     }
`;