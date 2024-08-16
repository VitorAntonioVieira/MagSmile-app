// import React, { useEffect } from "react";
// import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#279DEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;