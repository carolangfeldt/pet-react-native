import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from '../../store/reducers/auth/actions';
import { restoreToken } from '../../store/reducers/auth/actions';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { PROFILE_PET_LIST } from '../../data/data';

const storeData = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Key');
  } catch (e) {
    console.log(`error saving value: ${e}`);
  }
};

const RenderItem = ({ navigation, data }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginBottom: '5%',
        justifyContent: 'flex-start',
        backgroundColor: '#ebeb',
        padding: '5%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Image source={data.images.uri} style={styles.image} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            margin: '5%',
          }}
        >
          <Text>{data.animal_name}</Text>
          <Text>{data.category}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPerfilPage')}
          style={styles.icon}
        >
          <Icon name="ios-pencil-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Perfil = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOut(null));
  const userToken = useSelector((state) => state.authReducer.userToken);
  const getToken = (token) => dispatch(restoreToken(token));

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        getToken(jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    bootstrapAsync();
  }, []);

  const handleLogout = () => {
    storeData(null);
    handleSignOut();
    navigation.navigate('BottomTabStack');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {userToken != null ? (
        <>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled
              data={PROFILE_PET_LIST}
              renderItem={({ item }) => {
                return <RenderItem data={item} navigation={navigation} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Button title={'Logout'} onPress={handleLogout} />
        </>
      ) : (
        <Button title={'Go to Login'} onPress={handleLogin} />
      )}
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  image: {
    width: 150,
    height: 150,
    borderColor: 'yellow',
    borderWidth: 3,
    borderRadius: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

/*
perfil
pets from owner
owner
*/
