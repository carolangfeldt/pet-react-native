import React, { useState } from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  ScrollView,
  Modal,
} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const AddMediaToolWrap = ({ modalVisible }) => {
  const imageUrl = 'https://media.giphy.com/media/gZEBpuOkPuydi/giphy.gif';
  const [filePath, setFilePath] = useState({});

  const handleItem = (item) => {
    switch (item) {
      case 'camera':
        captureImage('photo');
        break;
      case 'video':
        captureImage('video');
        break;
      case 'album_camera':
        chooseFile('photo');
        break;
      case 'album_video':
        chooseFile('video');
        break;
      default:
        break;
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        console.log('Write permission err', err);
      }
      return false;
    }
    return true;
  };

  const captureImage = async (type) => {
    const options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, // Video max duration in seconds
      saveToPhotos: true,
    };
    const isCameraPermitted = await requestCameraPermission();
    const isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled camera picker');
          return;
        }
        if (response.errorCode == 'camera_unavailable') {
          console.log('Camera not available on device');
          return;
        }
        if (response.errorCode == 'permission') {
          console.log('Permission not satisfied');
          return;
        }
        if (response.errorCode == 'others') {
          console.log(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    const options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled camera picker');
        return;
      }
      if (response.errorCode == 'camera_unavailable') {
        console.log('Camera not available on device');
        return;
      }
      if (response.errorCode == 'permission') {
        console.log('Permission not satisfied');
        return;
      }
      if (response.errorCode == 'others') {
        console.log(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  return (
    <FloatingAction
      actions={actions}
      onPressItem={(name) => {
        console.log(`selected button: ${name}`);
        handleItem(name);
      }}
    />
  );
};

export default AddMediaToolWrap;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 'auto',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const actions = [
  {
    text: 'camera',
    name: 'camera',
    position: 1,
  },
  {
    text: 'video',
    name: 'video',
    position: 2,
  },
  {
    text: 'Galeria Foto',
    name: 'album_camera',
    position: 3,
  },
  {
    text: 'Galeria Video',
    name: 'album_video',
    position: 4,
  },
];
