import React from "react";
import styled from 'styled-components/macro';

export interface BadgeComponentProps {
    name: string;
    category: string;
    className?: boolean;
}

const Badge: React.FunctionComponent<BadgeComponentProps> = ({ name, category, className }: BadgeComponentProps) =>  (
    <Body className={className}>
        <Name>{name}</Name>
        <p>{category}</p>
    </Body>
);

export default Badge;

const Body = styled.div<{className: any}> `
  color: #FFFFFF;
  font-size: 12px;
  padding: 6px 12px;
`;

const Name = styled.p`
  font-family: 'Avenir Next Demi', sans-serif;
  font-size: 16px;
  margin-bottom: 6px;
`;

