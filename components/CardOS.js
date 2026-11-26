import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function CardOS({ ordem, onPress }) {
    const obterEstiloStatus = (status) => {
        switch (status) {
            case 'aberto':
                return {
                    corTexto: '#D97706',
                    corFundo: '#FEF3C7',
                    bordaLateral: '#F59E0B',
                    rotulo: 'Em Aberto',
                };
            case 'andamento':
                return {
                    corTexto: COLORS.accent,
                    corFundo: '#E0F2FE',
                    bordaLateral: COLORS.accent,
                    rotulo: 'Em Andamento',
                };
            case 'encerrado':
                return {
                    corTexto: '#059669',
                    corFundo: '#D1FAE5',
                    bordaLateral: COLORS.success,
                    rotulo: 'Encerrada',
                };
            default:
                return {
                    corTexto: COLORS.textSecondary,
                    corFundo: '#F1F5F9',
                    bordaLateral: COLORS.border,
                    rotulo: status,
                };
        }
    };

    const estiloStatus = obterEstiloStatus(ordem.status);

    return (
        <TouchableOpacity
            style={[styles.card, { borderLeftColor: estiloStatus.bordaLateral }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.topoCard}>
                <Text style={styles.numeroOS}>OS #{ordem.numero}</Text>
                <View style={[styles.badge, { backgroundColor: estiloStatus.corFundo }]}>
                    <Text style={[styles.badgeTexto, { color: estiloStatus.corTexto }]}>
                        {estiloStatus.rotulo}
                    </Text>
                </View>
            </View>

            <Text style={styles.cliente} numberOfLines={1}>
                👤 {ordem.cliente}
            </Text>

            <Text style={styles.servico} numberOfLines={2}>
                🛠️ {ordem.servico}
            </Text>

            <View style={styles.rodapeCard}>
                <Text style={styles.data}>
                    📅 {ordem.data} {ordem.horario ? `• 🕒 ${ordem.horario}` : ''}
                </Text>
                <Text style={styles.seta}>›</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderLeftWidth: 5, // Destaque lateral colorido pelo status
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
    },
    topoCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    numeroOS: {
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.textSecondary,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 12,
    },
    badgeTexto: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    cliente: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    servico: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginBottom: 10,
        lineHeight: 18,
    },
    rodapeCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        paddingTop: 8,
    },
    data: {
        fontSize: 12,
        color: COLORS.textSecondary,
        fontWeight: '500',
    },
    seta: {
        fontSize: 18,
        color: COLORS.textSecondary,
        fontWeight: 'bold',
    },
});
