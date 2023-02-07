import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';

export default () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>Hello world</Text>
      </Box>
    </NativeBaseProvider>
  );
};
