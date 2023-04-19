import { View, Text, StyleSheet, Image, SafeAreaView, Animated } from 'react-native'
import { COLORS, FONTS, SIZES } from "../constants";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft04 from "../assets/images/nft04.jpg";
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

const Welcom = () => {
  const navigation = useNavigation();
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
    const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;

  const pressHandler = () => {
    navigation.navigate('Home')
  }

  const imagesAnimationHandler = () => {
      Animated.sequence([
        Animated.timing(fadeImagesAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(moveImagesAnimation, {
          toValue: { x: 0, y: 0 },
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const textAnimationHandler = () => {
      Animated.timing(fadeTextAnimation, {
        toValue: 1,
        duration: 1000,
        delay : 1300,
        useNativeDriver: true,
      }).start();
    };
    const buttonAnimationHandler = () => {
      Animated.spring(moveButtonAnimation, {
        toValue: 0,
        friction: 4,
        delay: 1300,
        useNativeDriver: true,
      }).start();
    };
  
    useEffect(() => {
      imagesAnimationHandler();
      textAnimationHandler();
      buttonAnimationHandler();
    }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler])
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[
          styles.imageContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}>
        <View style={styles.imageCard}>
          <Image source={nft08} style={styles.image} />
        </View>
        <View style={[styles.imageCard , {top: SIZES.small + 15}]}>
          <Image source={nft06} style={styles.image} />
        </View>
        <View style={styles.imageCard}>
          <Image source={nft04} style={styles.image} />
        </View>
      </Animated.View>
      <Animated.View style={[styles.textContainer, {
            opacity: fadeTextAnimation,
          },]}>
        <Text style={styles.mainText}>
          Find, Collect and Sell Amazing NFTs
        </Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <Animated.View style={[styles.buttonContainer, {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },]}>
        <Button title="Get Started" stylesButton={styles.button} stylesText={styles.textButton} pressHandler={pressHandler} />
      </Animated.View>
    </SafeAreaView>
  )
}

export default Welcom


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imageContainer: {
    top: -SIZES.medium,
    flexDirection: "row",
    gap: SIZES.small,
  },
  imageCard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.medium,
  },
  textContainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 6,
  },
  mainText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 5,
    textAlign: "center",
    color: COLORS.white,
  },
  subText: {
    fontFamily: FONTS.light,
    textAlign: "center",
    marginTop: SIZES.large,
    color: COLORS.gray,
  },
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xLarge + 10,
    marginVertical: SIZES.xLarge,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
});