import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { inicialConfigOneSignal } from '../config/onesignal';
import { navigationRef } from './RootNavigation';
import FoundPage from '../pages/Found';
import LostPage from '../pages/Lost';
import DonationPage from '../pages/Donation';
import PetDetailsPage from '../pages/PetDetails';
import LoginPage from '../pages/Login';
import LoadingPage from '../pages/Loading';
import SettingsPage from '../pages/Settings';
import PerfilPage from '../pages/Perfil';
import FeedPage from '../pages/Feed';
import NotificationsPage from '../pages/Notifications';
import AddPetPage from '../pages/AddPet';
import EditPerfilPage from '../pages/EditPerfil';
import Header from '../components/Header';

import { restoreToken } from '../store/reducers/auth/actions';

const Stack = createStackNavigator();
const HomeTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const activeTintLabelColor = 'yellow';
const inactiveTintLabelColor = '#808080';

function HomeTabStack() {
  return (
    <HomeTab.Navigator
      initialRouteName="LostPage"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}
    >
      <HomeTab.Screen
        name="FeedPage"
        component={FeedPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              PetFeed
            </Text>
          ),
        }}
      />
      <HomeTab.Screen
        name="LostPage"
        component={LostPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              Perdidos
            </Text>
          ),
        }}
      />
      <HomeTab.Screen
        name="FoundPage"
        component={FoundPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              Encontrados
            </Text>
          ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }}
      />
      <HomeTab.Screen
        name="DonationPage"
        component={DonationPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              Adoção
            </Text>
          ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons names="settings" color={color} size={size} />
          // ),
        }}
      />
    </HomeTab.Navigator>
  );
}

function BottomTabStack() {
  return (
    <BottomTab.Navigator initialRouteName="TabStack">
      <BottomTab.Screen name="TabStack" component={HomeTabStack} />
      <BottomTab.Screen name="AddPetPage" component={AddPetPage} />
      <BottomTab.Screen name="SettingsPage" component={SettingsPage} />
    </BottomTab.Navigator>
  );
}

const MainStackNavigator = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const userToken = useSelector((state) => state.authReducer.userToken);
  const isSignedIn = useSelector((state) => state.authReducer.isSignedIn);
  // const isSignedIn = useSelector((state) => state.authReducer.isSignedIn);
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
    inicialConfigOneSignal();
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="BottomTabStack" mode="modal">
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingPage} />
        ) : (
          <>
            <Stack.Screen
              name="BottomTabStack"
              component={BottomTabStack}
              options={{
                header: () => <Header />,
              }}
            />
            <Stack.Screen name="PetDetails" component={PetDetailsPage} />
            <Stack.Screen
              name="NotificationsPage"
              component={NotificationsPage}
            />
            <Stack.Screen name="PerfilPage" component={PerfilPage} />
            <Stack.Screen name="EditPerfilPage" component={EditPerfilPage} />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: isSignedIn ? 'pop' : 'push',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
