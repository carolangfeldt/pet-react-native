import OneSignal from 'react-native-onesignal';
import { Alert } from 'react-native';
import * as RootNavigation from '../routes/RootNavigation';

export async function inicialConfigOneSignal() {
  // const navigation = useNavigation();
  OneSignal.setAppId('3a57c78b-3d0c-4369-ac4a-1c08b34beb4a');
  OneSignal.setLogLevel(6, 0);
  OneSignal.setRequiresUserPrivacyConsent(false);
  // OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  //   console.log('Prompt response:', response);
  // });

  /* O N E S I G N A L  H A N D L E R S */
  OneSignal.setNotificationWillShowInForegroundHandler((notifReceivedEvent) => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notifReceivedEvent,
    );
    const notif = notifReceivedEvent.getNotification();

    const button1 = {
      text: 'Cancel',
      onPress: () => {
        notifReceivedEvent.complete();
      },
      style: 'cancel',
    };

    const button2 = {
      text: 'Complete',
      onPress: () => {
        RootNavigation.navigate('NotificationsPage');
        notifReceivedEvent.complete(notif);
      },
    };
    Alert.alert('Complete notification?', 'Test', [button1, button2], {
      cancelable: true,
    });
  });
  OneSignal.setNotificationOpenedHandler((notification) => {
    console.log('OneSignal: notification opened:', notification);
    RootNavigation.navigate('NotificationsPage');
  });
  OneSignal.setInAppMessageClickHandler((event) => {
    console.log('OneSignal IAM clicked:', event);
  });
  OneSignal.addEmailSubscriptionObserver((event) => {
    console.log('OneSignal: email subscription changed: ', event);
  });
  OneSignal.addSubscriptionObserver((event) => {
    console.log('OneSignal: subscription changed:', event);
  });
  OneSignal.addPermissionObserver((event) => {
    console.log('OneSignal: permission changed:', event);
  });

  const deviceState = await OneSignal.getDeviceState();
  console.log('OneSignal: device state: ', deviceState);
}
