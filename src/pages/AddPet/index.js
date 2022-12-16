import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Media from '../../components/AddMediaToolWrap';
import AccordionList from '../../components/AccordionList';

const AddPet = () => {
  return (
    <View style={styles.wrap}>
      <AccordionList title="Categoria">
        <Text>dog</Text>
      </AccordionList>
      <Media />
    </View>
  );
};

export default AddPet;

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
  },
  input: {
    flexDirection: 'row',
  },
  media: {
    justifyContent: 'flex-end',
  },
  btn: {},
});
