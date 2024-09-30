import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const eventTypes = [
    { title: 'Casamento', image: require('../assets/img/casamento.png') },
    { title: 'Aniversário', image: require('../assets/img/aniversario.png') },
    { title: 'Formatura', image: require('../assets/img/formatura.png') },
    { title: 'Esportivo', image: require('../assets/img/esportivo.jpg') },
    { title: 'Corporativo', image: require('../assets/img/corporativo.jpg') },
    { title: 'Outros', image: require('../assets/img/outros.jpg') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Barra Superior */}
        <View style={styles.header}>
          <Icon name="heart-o" size={24} color="#FFCC00" />
          <Text style={styles.headerTitle}>Home</Text>
          <Icon name="user-o" size={24} color="#FF00FF" />
        </View>

        {/* Texto de Seleção */}
        <Text style={styles.title}>Selecione qual o tipo do seu evento</Text>

        {/* Grid de Imagens */}
        <View style={styles.grid}>
          {eventTypes.map((event, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={event.image} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.cardText}>{event.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    width: '45%',
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // sombra no Android
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
