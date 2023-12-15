import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from "./style";

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        fetch("http://172.20.10.3:3445/api/user",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    login: username,
                    password: password,
                })
            }).then(() => {
                navigation.navigate('Login');
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
}

export default Register;
