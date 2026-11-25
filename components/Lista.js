import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardOS from './CardOS';
import { COLORS } from '../constants/theme';

export default function Lista({ dados, onSelectOS, mensagemVazia = "Nenhuma ordem de serviço encontrada." }) {
    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => String(item.id || item.numero)}
            renderItem={({ item }) => (
                <CardOS
                    ordem={item}
                    onPress={() => onSelectOS(item)}
                />
            )}
            contentContainerStyle={styles.listaContainer}
            showsVerticalScrollIndicator={false}
            // Exibido automaticamente se a lista de dados estiver vazia
            ListEmptyComponent={() => (
                <View style={styles.vazioContainer}>
                    <Text style={styles.vazioIcone}>📭</Text>
                    <Text style={styles.vazioTexto}>{mensagemVazia}</Text>
                </View>
            )}
        />
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