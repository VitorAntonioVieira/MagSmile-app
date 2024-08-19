import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';

const CustomButton = ({ type, text, color, width }) => {
    return (
        <TouchableOpacity style={{
            width: width,
            backgroundColor: Styles.Colors[color],
            borderRadius: 15,
            paddingVertical: 15,
            paddingHorizontal: 30,
            marginTop: 16,
            marginBottom: 25,
        }}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        color: Styles.Colors.white,
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default CustomButton;