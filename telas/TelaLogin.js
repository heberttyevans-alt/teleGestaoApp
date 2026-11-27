import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Botao from '../components/Botao';
import { COLORS, SIZES } from '../constants/theme';

export default function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleLogin = async () => {
        setCarregando(true);

        try {
            console.log('Login com:', email, senha);

            await new Promise((resolve) => setTimeout(resolve, 1500));

            navigation.navigate('Principal');
        } finally {
            setCarregando(false);
        }
    };
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
                editable={!carregando}
            />
            <TextInput style={styles.input} placeholder='Digite sua senha' placeholderTextColor={'#999'}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
                editable={!carregando}
            />
            <Botao texto="Entrar" onPress={handleLogin} carregando={carregando} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: COLORS.primaryDark,
    },
    titulo: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        color: COLORS.textSecondary,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 24,
    },
    input: {
        width: '100%',
        height: 48,
        borderRadius: SIZES.radius,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
    }
});
