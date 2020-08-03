import React from "react";
import styled from "styled-components/macro";

export interface BadgeComponentProps {
  name: string;
  category: string;
  className?: boolean;
}

const Badge: React.FunctionComponent<BadgeComponentProps> = ({
  name,
  category,
  className,
}: BadgeComponentProps) => (
  <Body className={className}>
    <Name>{name}</Name>
    <p>{category}</p>
  </Body>
);

export default Badge;

const Body = styled.div<{ className: any }>`
  color: #ffffff;
  font-size: 12px;
  padding: 6px 12px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const Name = styled.p`
  font-family: "Avenir Next Demi", sans-serif;
  font-size: 16px;
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
