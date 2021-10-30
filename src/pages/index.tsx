import { Center, Text, VStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Container } from 'components/Container';
import { MapControls } from 'components/containers/home/MapControls/MapControls';
import { useEffect, useState } from 'react';

const Index = () => {
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    (async () => {
      const map = require('components/containers/home/Map/Map').Map;

      setMapComponent(() => map);
    })();
  });

  if (!MapComponent) {
    return (
      <Center minH='100vh'>
        <VStack>
          <Spinner />
          <Text>Učitavanje karte</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Container minH='100vh'>
      <MapComponent />

      <MapControls />
    </Container>
  );
};

export default Index;
