import { LatLngTuple } from 'leaflet';
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { Circle, useMapEvents } from 'react-leaflet';

interface ICurrentPositionPin {
  position: GeolocationPosition;
}

export const CurrentPositionPin: FC<ICurrentPositionPin> = ({ position }) => {
  const [zoom, setZoom] = useState(14);
  useMapEvents({
    zoom: ({ sourceTarget }) => setZoom(sourceTarget._zoom),
  });

  const currPosition = useMemo<LatLngTuple>(
    () => position?.coords && [position.coords.latitude, position.coords.longitude],
    [position]
  );

  if (!position?.coords) return null;

  return (
    <Fragment>
      <Circle
        center={currPosition}
        pathOptions={{
          color: 'orange',
        }}
        radius={position.coords.accuracy}
      />
      <Circle
        center={currPosition}
        pathOptions={{
          color: 'orange',
          fillOpacity: 1,
        }}
        radius={Math.max(7, (zoom / 14) * 20)}
      />
    </Fragment>
  );
};
