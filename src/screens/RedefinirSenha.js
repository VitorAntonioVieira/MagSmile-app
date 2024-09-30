import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Botão de voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.title}>Redefinir senha</Text>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Digite seu email e enviaremos um email para você informando como recuperá-la
        </Text>

        {/* Campo de email */}
        <View style={styles.inputContainer}>
          <Icon name="email-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="abc@email.com"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Botão de Enviar */}
        <TouchableOpacity style={styles.solidButton}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        {/* Divisor */}
        <Text style={styles.orText}>ou</Text>

        {/* Botões de login social */}
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={20} color="#3b5998" />
          <Text style={styles.socialText}>Entrar com Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#DB4437" />
          <Text style={styles.socialText}>Entrar com Google</Text>
        </TouchableOpacity>

        {/* Link para Login */}
        <Text style={styles.footerText}>
          Lembrou sua senha?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  solidButton: {
    backgroundColor: '#7208D7', // Cor sólida
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra no Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  socialText: {
    fontSize: 16,
    marginLeft: 10,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
  loginLink: {
    color: '#7208D7',
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
