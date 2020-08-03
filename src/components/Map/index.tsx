import React from "react";
import styled from "styled-components/macro";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

type locationType = {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: Array<string>;
};

export interface MapComponentProps {
  location: locationType;
  zoomLevel: number;
}

const Map: React.FunctionComponent<MapComponentProps> = ({
  location,
  zoomLevel,
}: MapComponentProps) => (
  <Container>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBs6glXDwXHRRAekLR8sfBWuGPNGoysQJo" }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin lat={location.lat} lng={location.lng} />
    </GoogleMapReact>
  </Container>
);

export default Map;

const Container = styled.div`
  height: 180px;

  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;
