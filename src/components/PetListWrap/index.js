import * as React from 'react';
import {
  StyleSheet,
  View,
  RefreshControl,
  StatusBar,
  FlatList,
} from 'react-native';
import PetItemContent from '../PetItemContent';

const renderItem = ({ item }) => <PetItemContent content={item} />;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const PetListWrap = ({ navigation, data }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={data}
        renderItem={({ item }) => (
          <PetItemContent content={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 20,
  },
});

export default PetListWrap;
