import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Criar conta</Text>

      {/* Input de Nome de Usuário */}
      <View style={styles.inputContainer}>
        <Icon name="user-o" size={18} color="#6e6e6e" />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Input de Email */}
      <View style={styles.inputContainer}>
        <Icon name="envelope-o" size={18} color="#6e6e6e" />
        <TextInput
          style={styles.input}
          placeholder="abc@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Input de Senha */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={18} color="#6e6e6e" />
        <TextInput
          style={styles.input}
          placeholder="Criar Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? "eye" : "eye-slash"} size={18} color="#6e6e6e" />
        </TouchableOpacity>
      </View>

      {/* Input de Confirmar Senha */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={18} color="#6e6e6e" />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
          <Icon name={showConfirmPassword ? "eye" : "eye-slash"} size={18} color="#6e6e6e" />
        </TouchableOpacity>
      </View>

      {/* Botão de Cadastrar */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.orText}>ou</Text>

      {/* Botão de Login com Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="#1877F2" />
        <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
      </TouchableOpacity>

      {/* Botão de Login com Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#DB4437" />
        <Text style={styles.socialButtonText}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Link para Login */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Já possui uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center', // Centraliza o título
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '85%', // Define uma largura fixa para os inputs
    height: 50, // Altura padrão para os inputs
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#000',
  },
  eyeIcon: {
    padding: 10,
  },
  signupButton: {
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '85%', // Define uma largura fixa para o botão
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#6e6e6e',
    marginVertical: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 10,
    width: '85%', // Define uma largura fixa para os botões de login
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  loginLink: {
    fontSize: 14,
    color: '#A020F0',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
