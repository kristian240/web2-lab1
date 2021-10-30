import { StackProps, VStack } from '@chakra-ui/layout';
import { MapCurrentLocationControl } from 'components/ui/map/MapCurrentLocationControl/MapCurrentLocationControl';
import React, { FC } from 'react';

export const MapControls: FC<StackProps> = (props) => {
  return (
    <VStack position='fixed' zIndex={400} left={4} top={4} {...props}>
      <MapCurrentLocationControl />
    </VStack>
  );
};
