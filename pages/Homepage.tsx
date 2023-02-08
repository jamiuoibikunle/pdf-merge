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

export default () => {
  return (
    <Box flex={1} bg="#657CF9">
      {/* <Image h="100%" w="100%" source={require('../public/home.svg')} /> */}
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
          Make learning easier with Edulearn
        </Heading>
        <Text color="white" opacity={0.7} textAlign="center">
          Study your courses better and smarter with easy-to-use flashcards.
          Carry your notes everywhere.
        </Text>
        <Button w="80%" colorScheme="orange" borderRadius={20}>
          Start learning
        </Button>
      </VStack>
    </Box>
  );
};
