import { Button } from '@chakra-ui/button';
import { Heading, StackProps, Text, VStack } from '@chakra-ui/layout';
import { useCurrentLocation } from 'hooks/useCurrentLocation';
import React, { FC } from 'react';
import { convertToDegrees, printDegrees } from 'utils/map/coordinates';

interface IMapCurrentLocationControlProps extends StackProps {
  onShowCurrentLocation?(location: GeolocationPosition): void;
}

export const MapCurrentLocationControl: FC<IMapCurrentLocationControlProps> = ({
  onShowCurrentLocation,
  ...rest
}) => {
  const { position, error } = useCurrentLocation();

  if (error) {
    return (
      <VStack align='start' bgColor='white' p={6} borderRadius='lg' boxShadow='lg' {...rest}>
        <Text>{error}</Text>
      </VStack>
    );
  }

  if (!position) {
    return (
      <VStack align='start' bgColor='white' p={6} borderRadius='lg' boxShadow='lg' {...rest}>
        <Text>Dohvaćam vašu lokaciju</Text>
      </VStack>
    );
  }

  const {
    coords: { latitude, longitude },
  } = position;

  const handleButtonClick = () => {
    onShowCurrentLocation?.(position);
  };

  return (
    <VStack align='start' bgColor='white' p={6} borderRadius='lg' boxShadow='lg' {...rest}>
      <Heading size='md'>Vaša lokacija</Heading>

      <Text>
        {[printDegrees(convertToDegrees(Math.abs(latitude))), latitude > 0 ? 'S' : 'J'].join(' ')}
      </Text>
      <Text>
        {[printDegrees(convertToDegrees(Math.abs(longitude))), longitude > 0 ? 'I' : 'Z'].join(' ')}
      </Text>

      {onShowCurrentLocation && (
        <Button onClick={handleButtonClick}>Centriraj moju lokaciju</Button>
      )}
    </VStack>
  );
};
