import {Button, Center, HStack} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {types} from 'react-native-document-picker';

export default ({documentPicker, handleError, setResult, result}: any) => {
  return (
    <HStack
      position="absolute"
      w="100%"
      h={50}
      bottom={0}
      borderTopWidth={1}
      borderColor="gray.500"
      justifyContent="space-evenly"
      alignItems="center">
      <MaterialIcon size={25} name="home-filled" />
      <Button
        bg="#657CF9"
        w={65}
        h={65}
        borderRadius={50}
        bottom={5}
        onPress={async () => {
          try {
            const pickerResult = await documentPicker.pickSingle({
              type: types.pdf,
            });
            setResult([...result, pickerResult]);
          } catch (err) {
            handleError(err);
          }
        }}>
        <AntDesign color="white" size={25} name="plus" />
      </Button>
      <Ionicons size={25} name="settings-outline" />
    </HStack>
  );
};
