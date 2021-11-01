import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import { StackProps, VStack } from '@chakra-ui/layout';
import React, { FC, Fragment, useEffect } from 'react';
import getConfig from 'next/config';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { useCurrentLocation } from 'hooks/useCurrentLocation';
import { useRouter } from 'next/router';
import { mutate } from 'swr';

const { publicRuntimeConfig } = getConfig();

export const AuthSection: FC<StackProps> = ({ ...rest }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const router = useRouter();
  const { position } = useCurrentLocation();

  useEffect(() => {
    if (router.query.code && router.query.state) {
      if (isAuthenticated && position?.coords) {
        const body = {
          name: user.nickname || user.email,
          date: new Date().toISOString(),
          location: [position.coords.latitude, position.coords.longitude],
        };

        fetch('/api/last-logins', {
          method: 'POST',
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((data) => mutate('/api/last-logins', data));

        router.replace(router.pathname);
      }
    }
  }, [router, isAuthenticated, user, position]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleRegister = () => {
    loginWithRedirect({ screen_hint: 'signup' });
  };

  const handleLogout = () => {
    logout({ returnTo: publicRuntimeConfig.APP_DOMAIN });
  };

  return (
    <VStack alignItems='stretch' w='full' p={4} bgColor='white' borderRadius='lg' {...rest}>
      {isAuthenticated ? (
        <Fragment>
          <Stat>
            <StatLabel>Ime</StatLabel>
            <StatNumber>{user.name}</StatNumber>
          </Stat>
          <Button onClick={handleLogout}>Odjava</Button>
        </Fragment>
      ) : (
        <Fragment>
          <Button onClick={handleLogin}>Prijava</Button>
          <Button onClick={handleRegister}>Registracija</Button>
        </Fragment>
      )}
    </VStack>
  );
};
