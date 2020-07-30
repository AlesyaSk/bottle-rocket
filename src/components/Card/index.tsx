import React from "react";
import styled from 'styled-components/macro';

import gradient from '../../assets/cellGradientBackground.png';
import Badge from "../../elements/Badge";

export interface CardComponentProps {
    name: string;
    img: string;
    category: string;
    handleClick: (restaurant: any) => void;
}

const Card: React.FunctionComponent<CardComponentProps> = ({ name, img, category, handleClick }: CardComponentProps) =>  (
        <Container bg={img} onClick={handleClick}>
           <Badge name={name} category={category} />
        </Container>
    );

export default Card;


const Container = styled.div<{bg: string}> `
  display: flex;
  align-items: flex-end;
  background:  url(${gradient}) bottom, url(${props => props.bg}) no-repeat;
  height: 180px;
  background-size: cover;
  cursor: pointer;
  
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;
