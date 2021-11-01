import { Center, Text, VStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Container } from 'components/Container';
import { MapControls } from 'components/containers/home/MapControls/MapControls';
import { useEffect, useRef, useState } from 'react';
import { MapContextProvider } from 'contexts/map';
import { AuthSection } from 'components/containers/home/AuthSection/AuthSection';
import { LastLoginsSection } from 'components/containers/home/LastLoginsSection/LastLoginsSection';
import { NextPage } from 'next';

const Index: NextPage = () => {
  const mapRef = useRef(null);
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
      <MapContextProvider value={{ mapRef }}>
        <MapComponent
          whenCreated={(map) => {
            mapRef.current = map;
          }}
        />

        <VStack position='fixed' zIndex={400} left={4} top={4} maxW='256px' align='stretch'>
          <AuthSection />

          <MapControls />

          <LastLoginsSection />
        </VStack>
      </MapContextProvider>
    </Container>
  );
};

export default Index;
