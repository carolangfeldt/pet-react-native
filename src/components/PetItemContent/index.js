import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import PetImageCarousel from '../PetImageCarousel';

const PetItemContent = ({ navigation, content }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const perfilImage = content.images;
  const [value, setValue] = React.useState(true);

  const toggleFunction = () => {
    setValue(!value);
  };
  const changeIcon = (status) => {
    return status ? 'ios-paw-outline' : 'ios-paw';
  };

  const handlePetDescription = () => {
    navigation.navigate('PetDetails');
  };
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{content.category}</Text>
      <View style={styles.carousel}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={perfilImage}
          renderItem={PetImageCarousel}
          sliderWidth={200}
          itemWidth={200}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView
        />
        <Pagination
          dotsLength={perfilImage.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 6,
            height: 6,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots
        />
      </View>
      <Text>{content.title}</Text>
      <Text>{`Perdido às: ${content.event_timestamp}`}</Text>
      <View style={styles.geo_content}>
        <Icon name="location-outline" size={16} />
        <Text>{`${content.address[0].city}, ${content.address[0].state}`}</Text>
      </View>
      <View style={styles.pet_actions}>
        <View style={styles.geo_content}>
          <TouchableOpacity onPress={toggleFunction}>
            <Icon name={changeIcon(value)} size={20} color="yellow" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFunction}>
            <Icon name="ios-chatbox-outline" size={20} color="yellow" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlePetDescription} style={styles.button}>
          <Text>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#633688',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  carousel: {
    backgroundColor: '#633688',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
  geo_content: {
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'flex-end',
  },
  pet_actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PetItemContent;

// <Image source={perfilImage} style={{ width: 200, height: 200 }} />
