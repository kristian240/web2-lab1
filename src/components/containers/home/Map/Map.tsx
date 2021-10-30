import React, { FC } from 'react';
import { MapContainer } from 'components/ui/map/MapContainer/MapContainer';
import { TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

interface IMapProps {}

export const Map: FC<IMapProps> = ({ ...rest }) => {
  return (
    <MapContainer>
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};
