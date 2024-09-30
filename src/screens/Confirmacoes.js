import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, CheckBox, StyleSheet, FlatList } from 'react-native';
import { app } from '../components/Banco'; // Substitua pelo seu arquivo de configuração Firebase
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

export default function GuestList() {
  const [guestName, setGuestName] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [guests, setGuests] = useState([]);

  // Função para carregar os convidados do Firestore em tempo real
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(app, 'eventGuests'), (snapshot) => {
      const guestsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGuests(guestsData);
    });
    return unsubscribe;
  }, []);

  // Função para adicionar um novo convidado ao Firestore
  const handleAddGuest = async () => {
    if (guestName.trim()) {
      try {
        await addDoc(collection(app, 'eventGuests'), {
          name: guestName,
          confirmed: isConfirmed,
        });
        setGuestName('');
        setIsConfirmed(false);
      } catch (error) {
        console.error('Erro ao adicionar convidado:', error);
      }
    }
  };

  // Contagem de convidados confirmados, não confirmados e total
  const confirmedGuests = guests.filter(guest => guest.confirmed).length;
  const totalGuests = guests.length;
  const unconfirmedGuests = totalGuests - confirmedGuests;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de convidados</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{confirmedGuests}</Text>
          <Text style={styles.statLabel}>Confirmados</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{totalGuests}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{unconfirmedGuests}</Text>
          <Text style={styles.statLabel}>Não confirmados</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Adicione mais pessoas à sua festa!</Text>
      <TextInput
        placeholder="Nome do convidado"
        style={styles.input}
        value={guestName}
        onChangeText={setGuestName}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox value={isConfirmed} onValueChange={setIsConfirmed} />
        <Text>Caso o convidado esteja confirmado, clique na caixa</Text>
      </View>
      <Button title="Adicionar convidado" onPress={handleAddGuest} color="#6200ea" />

      {/* Exibição da lista de convidados */}
      <FlatList
        data={guests}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.guestItem}>
            <Text style={styles.guestName}>{item.name}</Text>
            <Text style={styles.guestStatus}>{item.confirmed ? 'Confirmado' : 'Não confirmado'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  statBox: { alignItems: 'center', padding: 10, backgroundColor: '#6200ea', borderRadius: 8 },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  statLabel: { fontSize: 14, color: '#fff' },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 10 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  guestItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  guestName: { fontSize: 16 },
  guestStatus: { fontSize: 14, color: 'gray' },
});
