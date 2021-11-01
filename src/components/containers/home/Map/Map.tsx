import React, { FC } from 'react';
import { MapContainer } from 'components/ui/map/MapContainer/MapContainer';
import { Circle, TileLayer } from 'react-leaflet';
import { useCurrentLocation } from 'hooks/useCurrentLocation';
import { CurrentPositionPin } from 'components/ui/map/CurrentPositionPin/CurrentPositionPin';
import useSWR from 'swr';
import { LastLoginResponseType } from 'components/containers/home/LastLoginsSection/LastLoginsSection';

import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

interface IMapProps {}

export const Map: FC<IMapProps> = ({ children, ...rest }) => {
  const { position } = useCurrentLocation();
  const { data } = useSWR<LastLoginResponseType>('/api/last-logins', (url) =>
    fetch(url).then((res) => res.json())
  );

  return (
    <MapContainer {...rest}>
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {position && <CurrentPositionPin position={position} />}

      {data?.lastLogins &&
        data.lastLogins.map((lastLocation) => (
          <Circle
            key={`${lastLocation.date}-${lastLocation.location.join(' ')}-map-pin`}
            center={lastLocation.location}
            pathOptions={{ color: 'black', fillOpacity: 1 }}
            radius={24}
          />
        ))}

      {children}
    </MapContainer>
  );
};
