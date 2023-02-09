import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from 'native-base';

export default ({navigation}: any) => {
  return (
    <Box flex={1} bg="#657CF9">
      <VStack p={10} h="70%" w="100%" alignItems="center" space={5} mt="auto">
        <Image
          alt="Study desk"
          alignSelf="flex-end"
          source={require('../public/laptop.png')}
        />
        <Spacer />
        <Heading
          textAlign="center"
          color="white"
          fontSize={25}
          fontWeight="500">
          PDF Merge
        </Heading>
        <Text color="white" opacity={0.7} textAlign="center">
          Merge PDFs from your local storage in 3 easy steps. No subscription
          needed, no adverts.
        </Text>
        <Button
          w="80%"
          colorScheme="orange"
          borderRadius={20}
          size="lg"
          onPress={() => navigation.navigate('Dashboard')}>
          Start for free
        </Button>
      </VStack>
    </Box>
  );
};
