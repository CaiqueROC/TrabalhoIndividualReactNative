import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import { styles } from './style';
import { ButtonTypes } from '../../components/ButtonTypes';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home')
  };

  const handleRegister = () => {
    Alert.alert("Registro realizado com sucesso!");
  };

  const handleForgotPassword=()=>{
    Alert.alert("Email enviado para recuperação de senha")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to save your favorite manga in the cloud.</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ButtonTypes
            title="login"
            handleFunction={handleLogin}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <ButtonTypes
            title="register"
            handleFunction={handleRegister}
          />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </TouchableOpacity>
    </View>
  );
};