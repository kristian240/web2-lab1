import { Button } from '@chakra-ui/button';
import { Box, HStack, VStack } from '@chakra-ui/layout';
import { MapCurrentLocationControl } from 'components/ui/map/MapCurrentLocationControl/MapCurrentLocationControl';
import React, { FC } from 'react';

export const MapControls: FC<IMapControlsProps> = () => {
  return (
    <VStack position='fixed' zIndex={400} left={4} top={4}>
      <MapCurrentLocationControl />
    </VStack>
  );
};
