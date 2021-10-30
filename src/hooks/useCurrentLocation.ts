import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
  const [position, setPosition] = useState<GeolocationPosition>(null);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Dohvat trenutne lokacije nije podržan');

      return;
    }

    navigator.geolocation.watchPosition(
      (p) => {
        setPosition(p);
      },
      () => {
        setError('Nije moguće očitati trenutnu lokaciju');
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        // maximumAge: Infinity,
      }
    );
  }, []);

  return {
    position,
    error,
  };
};
