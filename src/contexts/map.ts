import { createContext } from '@chakra-ui/react-utils';
import { Map } from 'leaflet';
import { MutableRefObject } from 'react';

export const [MapContextProvider, useMapContext, MapContext] =
  createContext<{ mapRef?: MutableRefObject<Map> }>();
