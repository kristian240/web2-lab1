import { Container } from 'components/Container';
import { useEffect, useState } from 'react';

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
      {MapComponent && <MapComponent />}
    </Container>
  );
};

export default Index;
