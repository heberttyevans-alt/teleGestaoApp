import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardOS from './CardOS';
import { COLORS } from '../constants/theme';

export default function Lista({ dados, onSelectOS, mensagemVazia = "Nenhuma ordem de serviço encontrada." }) {
    // Se a lista estiver vazia, exibe mensagem amigável
    if (!dados || dados.length === 0) {
        return (
            <View style={styles.vazioContainer}>
                <Text style={styles.vazioIcone}>📭</Text>
                <Text style={styles.vazioTexto}>{mensagemVazia}</Text>
            </View>
        );
    }

    // Renderiza os cartões diretamente dentro da sanfona sem o aviso de VirtualizedList
    return (
        <View style={styles.listaContainer}>
            {dados.map((item) => (
                <CardOS
                    key={String(item.id || item.numero)}
                    ordem={item}
                    onPress={() => onSelectOS(item)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listaContainer: {
        paddingVertical: 8,
    },
    vazioContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    vazioIcone: {
        fontSize: 32,
        marginBottom: 8,
    },
    vazioTexto: {
        fontSize: 14,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
});
