import { FC } from 'react';
import { Box, BoxProps, MergeWithAs } from '@chakra-ui/react';

import { MapContainer as LeafletMapContainer, MapContainerProps } from 'react-leaflet';

interface IMapContainerProps extends MergeWithAs<BoxProps, MapContainerProps> {}

export const MapContainer: FC<IMapContainerProps> = (props) => {
  return (
    <Box
      as={LeafletMapContainer}
      css={{ a: { color: 'currentColor' } }}
      zoom={14}
      w='100%'
      h='100%'
      flex={1}
      zoomControl={false}
      center={[45.802414365566015, 15.925945198108467]}
      {...props}
    />
  );
};
