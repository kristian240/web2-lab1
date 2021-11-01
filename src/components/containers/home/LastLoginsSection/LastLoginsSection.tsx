import { IconButton } from '@chakra-ui/button';
import { InfoIcon } from '@chakra-ui/icons';
import { Divider, Heading, HStack, StackProps, Text, VStack } from '@chakra-ui/layout';
import { useMapContext } from 'contexts/map';
import React, { FC } from 'react';
import useSWR from 'swr';
import { convertToDegrees, printDegrees } from 'utils/map/coordinates';

export interface LastLoginResponseType {
  lastLogins: Array<{
    name: string;
    location: [number, number];
    date: string;
  }>;
}

export const LastLoginsSection: FC<StackProps> = ({ ...rest }) => {
  const { mapRef } = useMapContext();
  const { data, error } = useSWR<LastLoginResponseType>('/api/last-logins', (url) =>
    fetch(url).then((res) => res.json())
  );

  if (error) {
    return (
      <VStack alignItems='stretch' w='full' p={4} bgColor='white' borderRadius='lg' {...rest}>
        <Heading size='md'>Posljednje prijave</Heading>
        <Text>Pogreška se dogodila pri dohvatu podataka</Text>
      </VStack>
    );
  }

  if (!data) {
    return (
      <VStack alignItems='stretch' w='full' p={4} bgColor='white' borderRadius='lg' {...rest}>
        <Heading size='md'>Posljednje prijave</Heading>
        <Text>Dohvaćam podatke</Text>
      </VStack>
    );
  }

  const { lastLogins } = data;

  if (lastLogins.length === 0) {
    return (
      <VStack alignItems='stretch' w='full' p={4} bgColor='white' borderRadius='lg' {...rest}>
        <Heading size='md'>Posljednje prijave</Heading>
        <Text>Nema posljednjih prijava</Text>
      </VStack>
    );
  }

  return (
    <VStack alignItems='stretch' w='full' p={4} bgColor='white' borderRadius='lg' {...rest}>
      <Heading size='md'>Posljednje prijave</Heading>
      <VStack spacing={1} align='start' divider={<Divider />}>
        {lastLogins.map((lastLogin) => (
          <HStack w='full' key={`${lastLogin.name}-${lastLogin.date}`}>
            <VStack spacing={0} align='start' flex={1}>
              <Text fontWeight='bold'>{lastLogin.name}</Text>
              <Text fontSize='sm'>
                {[
                  printDegrees(convertToDegrees(Math.abs(lastLogin.location[0]))),
                  lastLogin.location[0] > 0 ? 'S' : 'J',

                  printDegrees(convertToDegrees(Math.abs(lastLogin.location[1]))),
                  lastLogin.location[1] > 0 ? 'I' : 'Z',
                ].join(' ')}
              </Text>
              <Text fontSize='sm'>{new Date(lastLogin.date).toLocaleTimeString()}</Text>
            </VStack>
            <IconButton
              variant='ghost'
              size='sm'
              aria-label='Prikaži na karti'
              onClick={() =>
                mapRef.current.setView(lastLogin.location, mapRef.current.getZoom(), {
                  animate: true,
                })
              }
            >
              <InfoIcon />
            </IconButton>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};
