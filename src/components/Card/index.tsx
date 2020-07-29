import React from "react";
import styled from 'styled-components/macro';
import gradient from '../../assets/cellGradientBackground.png';

export interface CardComponentProps {
    name: string;
    img: string;
    category: string;
}

const Card: React.FunctionComponent<CardComponentProps> = ({ name, img, category }: CardComponentProps) =>  (
        <Container bg={img}>
            <Body>
                <Name>{name}</Name>
                <p>{category}</p>
            </Body>
        </Container>
    );

export default Card;


const Container = styled.div<{bg: string}> `
  display: flex;
  align-items: flex-end;
  background:  url(${gradient}), url(${props => props.bg}) no-repeat;
  height: 180px;
  background-size: cover;
  padding: 6px 12px;
`;

const Body = styled.div`
  color: #FFFFFF;
  font-size: 12px;
`;

const Name = styled.p`
  font-family: 'Avenir Next Demi', sans-serif;
  font-size: 16px;
  margin-bottom: 6px;
`;

