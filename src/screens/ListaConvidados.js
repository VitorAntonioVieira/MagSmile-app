import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { app } from '../components/Banco'; // Certifique-se de que o caminho esteja correto
import { collection, addDoc, onSnapshot, query, doc, updateDoc, getFirestore } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GuestList() {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const db = getFirestore(app);

  // Função para carregar convidados do Firestore em tempo real
  useEffect(() => {
    const q = query(collection(db, 'eventGuests'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGuests(guestsData);
    });
    return unsubscribe;
  }, []);

  // Função para adicionar um novo convidado ao Firestore
  const handleAddGuest = async () => {
    if (guestName.trim()) {
      try {
        await addDoc(collection(db, 'eventGuests'), {
          name: guestName,
          confirmed: false, // Por padrão, novo convidado não está confirmado
        });
        setGuestName('');
      } catch (error) {
        console.error('Erro ao adicionar convidado:', error);
      }
    }
  };

  // Função para atualizar o estado de confirmação de um convidado no Firestore
  const handleToggleConfirmation = async (guestId, currentStatus) => {
    try {
      const guestRef = doc(db, 'eventGuests', guestId);
      await updateDoc(guestRef, {
        confirmed: !currentStatus, // Inverte o estado atual de confirmação
      });
    } catch (error) {
      console.error('Erro ao atualizar confirmação:', error);
    }
  };

  // Função para filtrar convidados pela busca
  const filteredGuests = guests.filter((guest) =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Separando convidados confirmados e não confirmados
  const confirmedGuests = filteredGuests.filter((guest) => guest.confirmed);
  const unconfirmedGuests = filteredGuests.filter((guest) => !guest.confirmed);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de convidados</Text>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{confirmedGuests.length}</Text>
          <Text style={styles.statLabel}>Confirmados</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{guests.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{unconfirmedGuests.length}</Text>
          <Text style={styles.statLabel}>Não confirmados</Text>
        </View>
      </View>

      {/* Campo de busca */}
      <TextInput
        placeholder="Buscar na lista"
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Exibição de confirmados */}
      <Text style={styles.subtitle}>Confirmados</Text>
      <FlatList
        data={confirmedGuests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.guestItem}>
            <Text style={styles.guestName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => handleToggleConfirmation(item.id, item.confirmed)}
            >
              <Text style={styles.confirmButtonText}>Desconfirmar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Exibição de não confirmados */}
      <Text style={styles.subtitle}>Não confirmados</Text>
      <FlatList
        data={unconfirmedGuests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.guestItem}>
            <Text style={styles.guestName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => handleToggleConfirmation(item.id, item.confirmed)}
            >
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Formulário para adicionar convidado */}
      <TextInput
        placeholder="Nome do convidado"
        style={styles.input}
        value={guestName}
        onChangeText={setGuestName}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddGuest}>
        <Text style={styles.addButtonText}>Adicionar convidado</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  statBox: { alignItems: 'center', padding: 10, backgroundColor: '#6200ea', borderRadius: 8 },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  statLabel: { fontSize: 14, color: '#fff' },
  searchInput: { borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 10 },
  subtitle: { fontSize: 18, marginVertical: 10 },
  guestItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  guestName: { fontSize: 16 },
  confirmButton: { backgroundColor: '#6200ea', padding: 10, borderRadius: 8 },
  confirmButtonText: { color: '#fff', fontSize: 14 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 10 },
  addButton: { backgroundColor: '#6200ea', padding: 15, borderRadius: 8, alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
