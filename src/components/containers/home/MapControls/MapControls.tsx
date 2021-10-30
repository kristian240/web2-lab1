import { position } from '@chakra-ui/styled-system';
import { MapCurrentLocationControl } from 'components/ui/map/MapCurrentLocationControl/MapCurrentLocationControl';
import { useMapContext } from 'contexts/map';
import React, { FC, Fragment } from 'react';

export const MapControls: FC = () => {
  const { mapRef } = useMapContext();

  const handleShowCurrentLocation = (position: GeolocationPosition) => {
    mapRef.current.setView([position.coords.latitude, position.coords.longitude], 15);
  };

  return (
    <Fragment>
      <MapCurrentLocationControl onShowCurrentLocation={handleShowCurrentLocation} />
    </Fragment>
  );
};
