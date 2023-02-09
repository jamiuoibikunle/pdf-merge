import {Box, Button, Heading, HStack, Input, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default ({navigation}: any) => {
  return (
    <Box flex={1}>
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
