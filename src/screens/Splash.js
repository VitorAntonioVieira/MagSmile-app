import React, { useEffect } from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Styles from '../styles/Styles';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); 
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
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
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
  logo: {
    width: 200,
  },
});

export default SplashScreen;