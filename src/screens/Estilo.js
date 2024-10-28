import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Styles from '../styles/Styles';

import ClassicImage from '../assets/img/party/wedding/classic.png';
import BeachImage from '../assets/img/party/wedding/beach.png';
import RawImage from '../assets/img/party/wedding/raw.png';

const { width: screenWidth } = Dimensions.get('window');

const data = [
    {   id: 0,
        title: 'Clássico',
        subtitle: 'Elegância atemporal com detalhes sofisticados.',
        image: ClassicImage,
    },
    {   id: 1,
        title: 'Rústico',
        subtitle: 'Aconchegante e com elementos naturais.',
        image: RawImage,
    },
    {   id: 2,
        title: 'Praia',
        subtitle: 'Estilo praiano com clima fresco e despojado.',
        image: BeachImage,
    },
];

const PartyStyleScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Estilo da festa</Text>
            <Carousel
                width={screenWidth}
                height={400}
                data={data}
                mode="parallax"
                scrollAnimationDuration={800}
                onSnapToItem={(index) => {setCurrentIndex(index); console.log(index)}}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20, // Adicionado para ajustar o botão ao fundo
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 20,
    },
    item: {
        width: screenWidth,
        height: 300,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        alignItems: 'center',
 // Adicionado para reduzir o espaço entre o carrossel e o botão
    },
    image: {
        width: '100%',
        height: '90%',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        color: Styles.Colors.mainPurple,
        textAlign: 'center',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginTop: 5,
    },
    button: {
        backgroundColor: Styles.Colors.mainPurple,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 30, // Controla a posição final do botão
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});


export default PartyStyleScreen;
