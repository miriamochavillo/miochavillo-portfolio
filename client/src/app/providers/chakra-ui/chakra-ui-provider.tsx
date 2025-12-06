import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import theme from './theme';
import '@fontsource/montserrat/400.css';

type Props = {
  children: ReactNode;
};

export const ChakraUIProvider = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
