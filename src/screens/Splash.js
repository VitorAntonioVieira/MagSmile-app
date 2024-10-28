import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Background from '../components/BackgroundGradient';
import Styles from '../styles/Styles';

const { width, height } = Dimensions.get('window');

const colors = ['#FF5733', '#3498DB', '#2ECC71', '#F1C40F'];

const ConfettiParticle = ({ x, y }) => {
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const rotateZ = useSharedValue(Math.random() * 360);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { rotateZ: `${rotateZ.value}deg` },
      ],
    };
  });

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(-height, {
        duration: 2000 + Math.random() * 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    rotateZ.value = withRepeat(
      withTiming(rotateZ.value + Math.random() * 360, {
        duration: 1000 + Math.random() * 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    const timeoutId = setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 500,
        easing: Easing.linear,
        onComplete: () => {
          runOnJS(resetAnimation)();
        },
      });
    }, 1500 + Math.random() * 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const resetAnimation = () => {
    translateY.value = 0;
    opacity.value = 1;
  };

  return (
    <Animated.View
      style={[
        styles.confettiParticle,
        {
          left: x,
          top: y,
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        },
        animatedStyles,
      ]}
    />
  );
};

const ConfettiAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Start animation immediately when the component mounts
    startAnimation();
  }, []);

  const startAnimation = () => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: -50,
      });
    }
    setParticles(newParticles);
  };

  return (
    <View style={styles.confettiContainer}>
      {particles.map((particle, index) => (
        <ConfettiParticle key={index} x={particle.x} y={particle.y} />
      ))}
    </View>
  );
};


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Estilo');
    }, 5000);
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Erro</Text>;
  }

  return (
    <View style={styles.container}>
      <Background
        startY={-1}
        color1={Styles.Colors.mainPurple}
        color2={Styles.Colors.black}
      >
        <ConfettiAnimation />
        <View style={styles.section}>
          <Image
            style={styles.back}
            source={require('../assets/img/confetti.png')}
          />
          <Image
            style={styles.logo}
            source={require('../assets/img/logo_rbg.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>Transformando o comum em mágico</Text>
        </View>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.Colors.mainPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confettiContainer: {
    // ...StyleSheet.absoluteFillObject, // Ensure confetti renders over the entire screen
  },
  confettiParticle: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  section: {
    marginHorizontal: Styles.Metrics.marginHorizontal,
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    top: -300,
  },
  logo: {
    width: 300,
    zIndex: 999,
    marginBottom: -100,
    marginTop: -50,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 13,
    color: Styles.Colors.white,
    letterSpacing: 3,
    textAlign: 'center',
  },
});

export default SplashScreen;