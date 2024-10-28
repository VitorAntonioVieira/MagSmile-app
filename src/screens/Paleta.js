import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';

const predefinedColors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9'];

const initialPalettes = [
  {
    id: 1,
    name: 'Tons pastéis',
    colors: ['#E8D5D5', '#C4A9A9', '#D9D6C2', '#D3D9D2', '#B7D4E7'],
    description: 'Tornam o espaço mais romântico, ideal para celebrações em locais abertos ou fechados',
  },
  {
    id: 2,
    name: 'Cores terracota',
    colors: ['#5E3D2B', '#C4B4A3', '#B15622', '#6A3B16', '#4D2F24'],
    description: 'Ideal para celebrações boho chic, românticas ou rústicas',
  },
  {
    id: 3,
    name: 'Rosé gold',
    colors: ['#B27D7D', '#E8C8C8', '#E1D4C8', '#C9A9A9', '#D8B6B6'],
    description: 'Ótima sugestão para casamentos luxuosos em locais fechados',
  }
];

const ColorPaletteScreen = () => {
  const [palettes, setPalettes] = useState(initialPalettes);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCustomColorVisible, setIsCustomColorVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState({ r: 255, g: 255, b: 255 });
  const [editPaletteId, setEditPaletteId] = useState(null);
  const [newPaletteName, setNewPaletteName] = useState('');
  const [hexInput, setHexInput] = useState('');
  const [rgbInput, setRgbInput] = useState({ r: 255, g: 255, b: 255 });
  const [isHexMode, setIsHexMode] = useState(true);

  const openColorPicker = () => setIsModalVisible(true);
  const closeColorPicker = () => {
    setIsModalVisible(false);
    setIsCustomColorVisible(false);
    setEditPaletteId(null);
    setHexInput('');
    setRgbInput({ r: 255, g: 255, b: 255 });
  };

  const handleColorSelect = (colorHex) => {
    const newPalette = {
      id: palettes.length + 1,
      name: `Nova Paleta ${palettes.length + 1}`,
      colors: [colorHex],
      description: 'Paleta personalizada adicionada pelo usuário',
    };
    setPalettes([...palettes, newPalette]);
    closeColorPicker();
  };

  const handleRenamePalette = (id, name) => {
    const updatedPalettes = palettes.map(palette =>
      palette.id === id ? { ...palette, name } : palette
    );
    setPalettes(updatedPalettes);
    setEditPaletteId(null);
  };

  const handleDeletePalette = (id) => {
    Alert.alert(
      'Excluir Paleta',
      'Tem certeza de que deseja excluir esta paleta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => {
            setPalettes(palettes.filter(palette => palette.id !== id));
          }
        },
      ]
    );
  };

  const renderPalette = ({ item }) => (
    <View style={styles.paletteContainer}>
      <View style={styles.colorRow}>
        {item.colors.map((color, index) => (
          <View key={index} style={[styles.colorBox, { backgroundColor: color }]} />
        ))}
      </View>
      
      {editPaletteId === item.id ? (
        <TextInput
          style={styles.paletteNameInput}
          value={newPaletteName}
          onChangeText={setNewPaletteName}
          onBlur={() => handleRenamePalette(item.id, newPaletteName)}
        />
      ) : (
        <Text style={styles.paletteName}>{item.name}</Text>
      )}

      <Text style={styles.paletteDescription}>{item.description}</Text>

      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => { setEditPaletteId(item.id); setNewPaletteName(item.name); }}>
          <Text style={styles.renameButton}>Renomear</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeletePalette(item.id)}>
          <Text style={styles.deleteButton}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const getHexColor = () => {
    const { r, g, b } = selectedColor;
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  const handleHexInputChange = (text) => {
    setHexInput(text);
    if (/^#?[0-9A-Fa-f]{6}$/.test(text)) {
      const hex = text.replace(/^#/, '');
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      setSelectedColor({ r, g, b });
      setRgbInput({ r, g, b });
    }
  };

  const handleRgbInputChange = (color, value) => {
    const newRgbInput = { ...rgbInput, [color]: Math.round(value) };
    setRgbInput(newRgbInput);
    setSelectedColor(newRgbInput);
    setHexInput(getHexColor());
  };

  const toggleColorMode = () => {
    setIsHexMode(!isHexMode);
    setHexInput(getHexColor());
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Paleta de cores</Text>

      <FlatList
        data={palettes}
        renderItem={renderPalette}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity style={styles.addButton} onPress={openColorPicker}>
        <Text style={styles.addButtonText}>Adicionar paleta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Avançar</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={closeColorPicker}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Escolha uma Cor</Text>

          <View style={styles.predefinedColorsContainer}>
            {predefinedColors.map((color, index) => (
              <TouchableOpacity key={index} style={[styles.colorCircle, { backgroundColor: color }]} onPress={() => handleColorSelect(color)} />
            ))}
          </View>

          <TouchableOpacity style={styles.customColorButton} onPress={() => setIsCustomColorVisible(true)}>
            <Text style={styles.customColorButtonText}>Criar cor personalizada</Text>
          </TouchableOpacity>

          {isCustomColorVisible && (
            <View style={styles.customColorContainer}>
              <Text style={styles.label}>Cor personalizada</Text>
              <View style={[styles.colorPreview, { backgroundColor: getHexColor() }]} />

              <TouchableOpacity style={styles.toggleButton} onPress={toggleColorMode}>
                <Text style={styles.toggleButtonText}>
                  {isHexMode ? 'Usar RGB' : 'Usar HEX'}
                </Text>
              </TouchableOpacity>

              {isHexMode ? (
                <TextInput
                  style={styles.hexInput}
                  placeholder="#FFFFFF"
                  value={hexInput}
                  onChangeText={handleHexInputChange}
                  maxLength={7}
                />
              ) : (
                <>
                  <Text style={styles.label}>Red</Text>
                  <Slider
                    minimumValue={0}
                    maximumValue={255}
                    value={rgbInput.r}
                    onValueChange={(value) => handleRgbInputChange('r', value)}
                    thumbTintColor="#FF0000"
                    minimumTrackTintColor="#FF0000"
                  />
                  <Text style={styles.label}>Green</Text>
                  <Slider
                    minimumValue={0}
                    maximumValue={255}
                    value={rgbInput.g}
                    onValueChange={(value) => handleRgbInputChange('g', value)}
                    thumbTintColor="#00FF00"
                    minimumTrackTintColor="#00FF00"
                  />
                  <Text style={styles.label}>Blue</Text>
                  <Slider
                    minimumValue={0}
                    maximumValue={255}
                    value={rgbInput.b}
                    onValueChange={(value) => handleRgbInputChange('b', value)}
                    thumbTintColor="#0000FF"
                    minimumTrackTintColor="#0000FF"
                  />
                </>
              )}

              <TouchableOpacity style={styles.selectButton} onPress={() => handleColorSelect(getHexColor())}>
                <Text style={styles.selectButtonText}>Selecionar Cor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={closeColorPicker}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
      </View>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
      },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    paletteContainer: {
      marginBottom: 15,
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    colorRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    colorBox: {
      width: 40,
      height: 40,
      borderRadius: 5,
    },
    paletteName: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 5,
    },
    paletteDescription: {
      fontSize: 14,
      color: '#777',
      marginBottom: 10,
    },
    paletteNameInput: {
      fontSize: 18,
      fontWeight: '600',
      borderBottomWidth: 1,
      borderBottomColor: '#DDD',
      marginBottom: 5,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    renameButton: {
      color: '#4CAF50',
      fontSize: 16,
      paddingHorizontal: 10,
    },
    deleteButton: {
      color: '#F44336',
      fontSize: 16,
      paddingHorizontal: 10,
    },
    addButton: {
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 20,
    },
    addButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    nextButton: {
      backgroundColor: '#FF5722',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    nextButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 20,
    },
    predefinedColorsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    colorCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      margin: 5,
    },
    customColorButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    customColorButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    customColorContainer: {
      marginTop: 20,
      padding: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    label: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
      fontWeight: '600',
    },
    colorPreview: {
      width: '100%',
      height: 50,
      borderRadius: 8,
      marginBottom: 10,
      borderColor: '#DDD',
      borderWidth: 1,
    },
    toggleButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 10,
    },
    toggleButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    hexInput: {
      borderWidth: 1,
      borderColor: '#DDD',
      padding: 10,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 10,
    },
    selectButton: {
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 10,
    },
    selectButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeButton: {
      backgroundColor: '#F44336',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 10,
    },
    closeButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },  
  addButton: {
    backgroundColor: '#A000A0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  paletteNameInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A000A0',
    marginBottom: 8,
    fontSize: 16,
    padding: 4,
    color: '#333',
  },
  toggleButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ColorPaletteScreen;
