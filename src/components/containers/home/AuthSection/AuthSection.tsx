import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import { StackProps, Text, VStack } from '@chakra-ui/layout';
import React, { FC, Fragment } from 'react';
import getConfig from 'next/config';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';

const { publicRuntimeConfig } = getConfig();

export const AuthSection: FC<StackProps> = ({ ...rest }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleRegister = () => {
    loginWithRedirect({ screen_hint: 'signup' });
  };

  const handleLogout = () => {
    logout({ returnTo: publicRuntimeConfig.APP_DOMAIN });
  };

  console.log(user);

  return (
    <VStack alignItems='stretch' w='full' p={4} bgColor='white' borderRadius='lg' {...rest}>
      {isAuthenticated ? (
        <Fragment>
          <Stat>
            <StatLabel>Ime</StatLabel>
            <StatNumber>{user.nickname}</StatNumber>
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
