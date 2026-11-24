import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, SIZES } from '../constants/theme';

export default function TelaUsuario({ navigation }) {
    const [foto, setFoto] = useState(null);
    const [status, setStatus] = useState('Disponível');
    const [notificacoes, setNotificacoes] = useState(true);

    //dados simulados do colaborador enquanto o app não consome a API

    const dadosColaborador = {
        nome: 'Hebertty Luiz de Andrade',
        cargo: 'Técnido de informática de campo 1',
        matricula: 'TI-1234',
        email: 'hebertty@email.com',
        telefone: '(35) 9 99396731',
        polo: 'Polo Lavras - Suporte técnico',
        veiculo: 'Uno-way (ABC-1D23)',
        estatiscas: {
            concluidas: 25,
            avaliacao: 4.8,
            tempoMedio: '45 min',
        }
    };

    const escolherDaGaleria = async () => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissao.granted) {
            Alert.alert('Permissão necessária', 'Conceda acesso à galeria para escolher uma foto.');
            return;
        }

        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1], //definição do formato da foto
            quality: 0.8,
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Tela Usuário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    texto: {
        fontSize: 18,
        color: '#333',
    },
});
