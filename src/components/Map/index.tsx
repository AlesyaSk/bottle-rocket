import React from 'react';
import styled from 'styled-components/macro';
import GoogleMapReact from 'google-map-react';
import LocationPin from "./LocationPin";

export interface MapComponentProps {
    location: any;
    zoomLevel: number;
}

const Map: React.FunctionComponent<MapComponentProps> = ({ location, zoomLevel }: MapComponentProps) =>  (
    <Container>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBs6glXDwXHRRAekLR8sfBWuGPNGoysQJo' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
        >
            <LocationPin />
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

