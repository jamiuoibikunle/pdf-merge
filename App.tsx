import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';
import Homepage from './pages/Homepage';

export default () => {
  return (
    <NativeBaseProvider>
      <Homepage />
    </NativeBaseProvider>
  );
};
