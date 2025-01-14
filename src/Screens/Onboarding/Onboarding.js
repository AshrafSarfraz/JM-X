
import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../Assets/images/slide1.png'),
    title: 'Debate On-The-Go',
    Detail: "Express your opinion. Anytime. Anywhere. Debate with people from all over the world about the relevant topics of today!",
    Like: '',
    Dislike: '',
  },
  {
    id: '2',
    image: require('../../Assets/images/slide2.png'),
    title: 'Unleash your opinion',
    Detail: "Create your own face-to-face debate or accept the challenge from another debater! Put your thinking cap on. You only have to choose your topic, opponent, duration and get started!",
    Like: '',
    Dislike: '',
  },
  {
    id: '3',
    image: require('../../Assets/images/slide3.png'),
    title: 'Be effective',
    Detail: 'Don’t just be a spectator. Tune into the debate and express your support or disapproval within the LIVE chat!',
    Like: require('../../Assets/images/Like2.png'),
    Dislike: require('../../Assets/images/Dislike3.png'),
  },
  {
    id: '4',
    image: require('../../Assets/images/slide4.png'),
    title: 'Tell the World!',
    Detail: 'We’ll give you a comprehensive report of your debate - are you helping to shape the minds of others? Share it - get your friends involved and spark those in your world to think!',
    Like: '',
    Dislike: '',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={item?.image}
        style={{ height: '68%', width, resizeMode: 'contain' }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item.Detail}</Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }} >
          <Image source={item.Like} style={styles.Like} />
          <Image source={item.Dislike} style={styles.DisLike} />
        </View>
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  // const skip = () => {
  //   const lastSlideIndex = slides.length - 1;
  //   const offset = lastSlideIndex * width;
  //   ref?.current.scrollToOffset({ offset });
  //   setCurrentSlideIndex(lastSlideIndex);
  // };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: 'red',
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 10 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View>
              <TouchableOpacity
                style={styles.getstartedbtn}
                onPress={() => navigation.replace('AccountScreen' , {signup: true })}>
                <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Montserrat-SemiBold' }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.replace('AccountScreen' , {signup: true })}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#DF0B0B',
                    fontFamily: 'Montserrat-SemiBold'
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontFamily: 'Montserrat-SemiBold'
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.8 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#2C2C2E',
    fontSize: 16,
    textAlign: 'center',
    width: 320,
    zIndex: 1,
    marginTop: 5,
    fontFamily: 'Montserrat-Medium'
  },
  title: {
    color: '#2C2C2E',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold'
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 4,
  },
  btn: {
    height: 50,
    width: 145,
    borderRadius: 5,
    backgroundColor: '#DF0B0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getstartedbtn: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#DF0B0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Like: {
    width: 25, height: 25, resizeMode: "contain",
    margin: 10
  },
  DisLike: {
    width: 26, height: 26, resizeMode: "contain",
    margin: 10, marginLeft: 0
  }
});
export default Onboarding;
