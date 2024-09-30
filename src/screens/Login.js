import React, { useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Button';
import Container from '../components/Container';
import CustomTextInput from '../components/TextInput';
import Styles from '../styles/Styles';

import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={"large"} color={Styles.Colors.mainPurple} />
            </SafeAreaView>
        );
    }

    // Função para navegar até a tela Home
    const handleLogin = () => {
        navigation.navigate('Home'); // Utilizando navigate para ir até a tela Home
    };

    // Função para navegar até a tela de cadastro
    const handleSignUpNavigation = () => {
        navigation.navigate('Cadastro'); // Utilize o nome da tela de cadastro
    };

    // Função para navegar até a tela de redefinição de senha
    const handleResetPasswordNavigation = () => {
        navigation.navigate('RedefinirSenha');
    };

    return (
        <View style={styles.main}>
            <Container justify={'flex-start'} height={0.85}>
                <Image
                    style={styles.headerLogo}
                    source={require('../assets/img/logo_rbg_invert.png')}
                />
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.subtitle}>Use seus dados para acessar sua conta</Text>

                <CustomTextInput
                    icon={'profile'}
                    placeholder={'Email ou Nome de usuário'}
                    value={email}
                    onChangeText={setEmail}
                />

                <CustomTextInput
                    icon={'lock'}
                    placeholder={'Senha'}
                    secure={true}
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Botão de Entrar */}
                <CustomButton
                    text={'Entrar'}
                    color={'mainPurple'}
                    width={'80%'}
                    onPress={handleLogin} // Navega para a tela Home ao pressionar
                />

                {/* Link para redefinir senha */}
                <TouchableOpacity onPress={handleResetPasswordNavigation}>
                    <Text>Esqueceu sua senha? <Text style={styles.bottomLabel}>Redefinir senha</Text></Text>
                </TouchableOpacity>

                <View style={styles.bottomLine}>
                    <View style={styles.line} />
                    <Text style={styles.label}>ou</Text>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity onPress={handleSignUpNavigation}>
                <Text>Não tem uma conta? <Text style={styles.bottomLabel}>Cadastre-se</Text></Text>
                </TouchableOpacity>
            </Container>
        </View>
    );
};

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
        color: Styles.Colors.mainPurple,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Styles.Colors.ccc,
      },
    label: {
        color: Styles.Colors.ccc,
        textAlign: 'center',
        marginHorizontal: 10,
    },
    bottomLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
});

export default Login;
