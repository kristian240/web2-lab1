import React, { FC } from 'react';
import { MapContainer } from 'components/ui/map/MapContainer/MapContainer';
import { TileLayer } from 'react-leaflet';
import { useCurrentLocation } from 'hooks/useCurrentLocation';

import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import { CurrentPositionPin } from 'components/ui/map/CurrentPositionPin/CurrentPositionPin';

interface IMapProps {}

export const Map: FC<IMapProps> = ({ children, ...rest }) => {
  const { position } = useCurrentLocation();

  return (
    <MapContainer {...rest}>
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {position && <CurrentPositionPin position={position} />}

      {children}
    </MapContainer>
  );
};
