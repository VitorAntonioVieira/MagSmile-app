import React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // If using vector icons

const data = [
  { id: '1', icon: 'person-outline', title: 'Local do evento', description: 'Selecionar', color: '#F4A300' },
  { id: '2', icon: 'people-outline', title: 'Lista de convidados', description: 'Selecionar', color: '#6D1A9C' },
  { id: '3', icon: 'restaurant-outline', title: 'Cardápio', description: 'Selecionar', color: '#6D1A9C' },
  { id: '4', icon: 'gift-outline', title: 'Lista de presentes', description: 'Lista', color: '#6D1A9C' },
  { id: '5', icon: 'briefcase-outline', title: 'Contratar', description: 'Selecionar profissional', color: '#F4A300' },
];

const App = () => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Icon name={item.icon} size={30} color={item.color} />
        <View style={styles.cardText}>
          <Text style={[styles.cardTitle, { color: item.color }]}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" size={24} color="#6D1A9C" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Planejamento</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={24} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Buscar" style={styles.searchInput} />
      </View>

      {/* Card List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 80, // To avoid FAB overlap
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6D1A9C',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default App;
