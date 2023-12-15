import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from "./style";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    fetch ("http://172.20.10.3:3445/api/user/auth",
        { 
            method:"POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
              login: email,
              password: password,
            })
        }).then(()=>{ 
          console.log(1)
          navigation.navigate("Home")})
    };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.loginInput}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.loginButton} onPress={() => navigation.navigate("Register")}>
          <Text >Cadastre-se</Text>
        </TouchableOpacity >
      </View>
    </View>
  );
};


export default Login;
