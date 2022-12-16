/* eslint-disable global-require */
export const PET_LIST_LOST = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    category: 'Doguinho',
    status: 'lost',
    animal_name: 'Vader',
    title: 'Lost my dog',
    event_description: 'He run away from my gate',
    event_timestamp: '0000-00-00 00:00:00',
    registraded_user_id: 0,
    geolocation: [
      {
        latitude: '0',
        longitude: '0',
        accuracy: '0',
      },
    ],
    address: [
      {
        zipcode: '',
        country: '',
        state: 'SC',
        city: 'Itajai',
        street: '',
        number: '',
        complement: '',
      },
    ],
    images: [
      {
        uri: require('../assets/images/dog1.jpeg'),
      },
      {
        uri: require('../assets/images/dog5.jpeg'),
      },
    ],
    comments: [
      {
        user_id: 1,
        user_image: '',
        message: 'saw him in the street',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad63abb28ba',
    registraded_user: [{}],
    title: 'Cat Lost',
    status: 'lost',
    description: 'He run away from my gate',
    category: 'cat',
    event_timestamp: '0000-00-00 00:00:00',
    geolocation: [
      {
        latitude: '0',
        longitude: '0',
        accuracy: '0',
      },
    ],
    address: [
      {
        zipcode: '',
        country: '',
        state: '',
        city: '',
        street: '',
        number: '',
        complement: '',
      },
    ],
    images: [
      {
        uri: require('../assets/images/cat1.jpeg'),
      },
    ],
  },
];

export const PET_LIST_FOUND = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb29ba',
    registraded_user: [{}],
    title: 'Dog found',
    status: 'lost',
    description: 'found near my home',
    category: 'dog',
    event_timestamp: '0000-00-00 00:00:00',
    geolocation: [
      {
        latitude: '0',
        longitude: '0',
        accuracy: '0',
      },
    ],
    address: [
      {
        zipcode: '',
        country: '',
        state: '',
        city: '',
        street: '',
        number: '',
        complement: '',
      },
    ],
    images: [
      {
        uri: require('../assets/images/dog2.jpeg'),
      },
      {
        uri: require('../assets/images/dog3.jpeg'),
      },
    ],
  },
];

export const PROFILE_PET_LIST = [
  {
    id: 'hauhsduadsk',
    animal_name: 'Zulu',
    category: 'dog',
    images: {
      uri: require('../assets/images/dog2.jpeg'),
    },
  },
  {
    id: 'hauhserhadsk',
    animal_name: 'Abba',
    category: 'cat',
    images: {
      uri: require('../assets/images/dog2.jpeg'),
    },
  },
];
