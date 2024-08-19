import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import Background from '../components/BackgroundGradient';
import Styles from '../styles/Styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 10000);
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <Text>Erro</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Background
        startY={-1}
        color1={Styles.Colors.mainPurple}
        color2={Styles.Colors.black}
      >
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
  section: {
    marginHorizontal: Styles.Metrics.marginHorizontal,
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    top: -300
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
    textAlign: 'center'
  }
});

export default SplashScreen;