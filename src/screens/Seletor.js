import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const ColorPickerModal = ({ visible, onClose, onColorSelect }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleColorSelect = () => {
    const color = `rgb(${red}, ${green}, ${blue})`;
    onColorSelect(color);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.label}>Red</Text>
        <Slider
          minimumValue={0}
          maximumValue={255}
          value={red}
          onValueChange={setRed}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000000"
        />

        <Text style={styles.label}>Green</Text>
        <Slider
          minimumValue={0}
          maximumValue={255}
          value={green}
          onValueChange={setGreen}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#000000"
        />

        <Text style={styles.label}>Blue</Text>
        <Slider
          minimumValue={0}
          maximumValue={255}
          value={blue}
          onValueChange={setBlue}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#000000"
        />

        <View style={[styles.colorPreview, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />

        <TouchableOpacity style={styles.selectButton} onPress={handleColorSelect}>
          <Text style={styles.selectButtonText}>Selecionar Cor</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 20,
  },
  colorPreview: {
    height: 50,
    width: '100%',
    marginVertical: 20,
    borderRadius: 8,
  },
  selectButton: {
    padding: 16,
    backgroundColor: '#A000A0',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  selectButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 16,
    backgroundColor: '#A000A0',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ColorPickerModal;
