import * as React from 'react';

import Content from '../../components/WrapContent';

import { PET_LIST_LOST } from '../../data/data';

const Feed = ({ navigation }) => {
  return <Content data={PET_LIST_LOST} navigation={navigation} />;
};

export default Feed;
