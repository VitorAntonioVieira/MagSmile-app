import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import Styles from '../styles/Styles';

const CustomTextInput = ({ icon, placeholder, secure, change }) => {
    const images = {
        profile: require('../assets/img/icons/profile.png'),
        lock: require('../assets/img/icons/lock.png'),
        email: require('../assets/img/icons/email.png'),
    };

    return (
        <View style={styles.container}>
            <Image source={images[icon]} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secure}
                onChange={change}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        borderColor: Styles.Colors.ccc,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 22,
        marginBottom: 20
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
});

export default CustomTextInput;