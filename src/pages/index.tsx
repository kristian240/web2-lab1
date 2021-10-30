import { Center, Text, VStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Container } from 'components/Container';
import { Fragment, useEffect, useState } from 'react';

const Index = () => {
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    (async () => {
      const map = require('components/containers/home/Map/Map').Map;

      setMapComponent(() => map);
    })();
  });

  return (
    <Container minH='100vh' suppressHydrationWarning={true}>
      {MapComponent ? (
        <Fragment>
          <MapComponent />
        </Fragment>
      ) : (
        <Center flex={1}>
          <VStack>
            <Spinner />
            <Text>Učitavanje karte</Text>
          </VStack>
        </Center>
      )}
    </Container>
  );
};

export default Index;
