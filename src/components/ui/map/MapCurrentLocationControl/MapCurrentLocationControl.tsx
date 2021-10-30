import { Button } from '@chakra-ui/button';
import { Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import React, { FC } from 'react';
import { convertToDegrees, printDegrees } from 'utils/map/coordinates';

interface IMapCurrentLocationControlProps {}

export const MapCurrentLocationControl: FC<IMapCurrentLocationControlProps> = ({ ...rest }) => {
  return (
    <VStack align='start' bgColor='white' p={6} borderRadius='lg'>
      <Heading size='md'>Moje koordinate</Heading>

      <Text>
        {[
          printDegrees(convertToDegrees(Math.abs(45.802414365566015))),
          45.802414365566015 > 0 ? 'S' : 'J',
        ].join(' ')}
      </Text>
      <Text>
        {[
          printDegrees(convertToDegrees(Math.abs(15.925945198108467))),
          15.925945198108467 > 0 ? 'I' : 'Z',
        ].join(' ')}
      </Text>

      <Button>Centriraj moju lokaciju</Button>
    </VStack>
  );
};
