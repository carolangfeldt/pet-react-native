import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import PetListWrap from '../PetListWrap';
import Header from '../PagesHeader';
import Media from '../AddMediaToolWrap';

const WrapContent = ({ data, navigation }) => {
  const [value, setValue] = React.useState(true);

  const toggleFunction = () => {
    setValue(!value);
  };
  const changeIcon = (status) => {
    return status ? 'ios-paw-outline' : 'ios-paw';
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <Header />
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PetListWrap data={data} navigation={navigation} />
        </View>
      </View>
      <Media />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default WrapContent;
