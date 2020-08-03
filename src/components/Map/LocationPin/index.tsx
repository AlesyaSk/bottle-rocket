import React from "react";
import styled from "styled-components/macro";
import pin from "../../../assets/pin.png";

/* eslint-disable @typescript-eslint/no-unused-vars */

type locationType = {
  lat: number;
  lng: number;
};

const LocationPin: React.FunctionComponent<locationType> = ({
  lng,
  lat,
}: locationType) => <Pin src={pin} alt="pin" />;

export default LocationPin;

const Pin = styled.img`
  width: 40px;
  height: 40px;
`;
