import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import React, { useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/Button';
import Container from '../components/Container';
import CustomTextInput from '../components/TextInput';
import Styles from '../styles/Styles';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_400Regular,
        Poppins_700Bold
    })
    if (!fontsLoaded) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={"large"} color={Styles.Colors.mainPurple} />
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.main}>
            <Container justify={'flex-start'} height={0.85}>
                <Image
                    style={styles.headerLogo}
                    source={require('../assets/img/logo_rbg_invert.png')}
                />
                <Text style={styles.title} >Bem Vindo!</Text>
                <Text style={styles.subtitle}>Use seus dados para acessar sua conta</Text>
                <CustomTextInput icon={'profile'} placeholder={'Email ou Nome de usuário'} />
                <CustomTextInput icon={'lock'} placeholder={'Senha'} secure={true} />
                <CustomButton text={'Entrar'} color={'mainPurple'} width={'80%'} />
                <Text style={styles.bottomLabel} >Redefinir senha</Text>
                <View style={styles.bottomLine} >
                    <Text style={styles.label} >ou</Text>
                </View>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Styles.Colors.white,
        justifyContent: 'flex-end',
    },
    headerLogo: {
        alignSelf: 'center',
        width: '80%',
    },
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 24,
        color: Styles.Colors.black,
        textAlign: 'center',
        marginBottom: 12,
        width: '80%',
    },
    subtitle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: Styles.Colors.black,
        textAlign: 'center',
        marginBottom: 14,
    },
    bottomLabel: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        color: Styles.Colors.mainPurple
    }
})

export default Login;