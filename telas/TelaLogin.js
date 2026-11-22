import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Botao from '../components/Botao';

export default function TelaLogin({ navigation }) {
    const { email, setEmail } = useState('');
    const { senha, setSenha } = useState('');

    const handleLogin = () => {
        console.log('Login com:', email, senha);

        navigation.navigate('Servicos');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo ao</Text>
            <Image source={require('../assets/logoSemFundo2.png')}
                style={styles.logo} resizeMode='contain' />
            <TextInput style={styles.input} placeholder='Digite seu e-mail' placeholderTextColor={'#999'}
                keyboardType="email-address"
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input} placeholder='Digite sua senha' placeholderTextColor={'#999'}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <Botao texto="Entrar" onPress={() => navigation.navigate('Servicos')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 24,
    },
    input: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
    }
});
