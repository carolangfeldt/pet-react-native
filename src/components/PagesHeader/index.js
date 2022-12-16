import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AccordionList from '../AccordionList';

const PagesHeader = () => {
  const [value, setValue] = React.useState(true);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const toggleFunction = () => {
    if (value) {
      fadeIn();
    } else {
      fadeOut();
    }
    setValue(!value);
  };

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const changeIcon = (status) => {
    return status ? 'ios-funnel-outline' : 'ios-close';
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleFunction}>
          <Icon name={changeIcon(value)} size={20} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}
      >
        <View style={styles.filterContainer}>
          <View>
            <Text style={styles.text}>Filtrar em</Text>
          </View>
          <AccordionList title="Categoria">
            <Text> Cat 1 </Text>
          </AccordionList>
          <AccordionList title="Locais">
            <Text> Cat 1 </Text>
          </AccordionList>
        </View>
      </Animated.View>
    </View>
  );
};

export default PagesHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  fadingContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  filterContainer: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
