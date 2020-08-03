import React from "react";
import styled from "styled-components/macro";
import pin from "../../../assets/pin.png";

const LocationPin: React.FunctionComponent = () => <Pin src={pin} alt="pin" />;

export default LocationPin;

const Pin = styled.img`
  width: 40px;
  height: 40px;
`;
