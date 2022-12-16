import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AddMedia from '../AddMediaToolWrap';

const MediaButton = () => {
  const [showMediaPicker, setShowMediaPicker] = React.useState(false);

  const handleMediaPicker = () => {
    setShowMediaPicker(!showMediaPicker);
  };

  return (
    <View style={styles.wrap}>
      <AddMedia />
    </View>
  );
};

export default MediaButton;

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
  },
});
