import {Box, Button, Heading, HStack, Input, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from '../components/NavigationBar';

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {useEffect, useState} from 'react';

export default ({navigation}: any) => {
  const [result, setResult] = useState<
    DocumentPickerResponse[] | DirectoryPickerResponse[] | undefined | null
  >([]);

  useEffect(() => {
    // console.log(JSON.stringify(result, null, 2));
    console.log(result);
  }, [result]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('Cancelled');
    } else if (isInProgress(err)) {
      console.warn('Multiple pickers');
    } else {
      throw err;
    }
  };

  return (
    <Box flex={1} position="relative">
      <NavigationBar
        documentPicker={DocumentPicker}
        result={result}
        setResult={setResult}
        handleError={handleError}
      />
      <VStack
        bg="#657CF9"
        h={180}
        borderBottomRadius={12}
        py={5}
        px={5}
        justifyContent="space-around">
        <Button
          alignSelf="flex-start"
          bg="transparent"
          color="gray.100"
          size="md"
          onPress={() => navigation.navigate('Home')}
          leftIcon={<Icon color="white" name="chevron-back-outline" />}
          p={0}>
          Back
        </Button>
        <Heading color="white" fontSize={20} fontWeight="500">
          Dashboard
        </Heading>
        <Input
          borderRadius={10}
          w="100%"
          px={5}
          InputLeftElement={
            <Box ml={3}>
              <Icon size={25} name="search-outline" />
            </Box>
          }
          bg="white"
          _focus={{
            bg: 'white',
          }}
        />
      </VStack>
    </Box>
  );
};
