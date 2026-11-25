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

    const estiloStatus = obterEstiloStatus(ordem.Status);

    return (
        <TouchableOpacity
            style={[styles.card, { borderLeftColor: estiloStatus.bordaLateral }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.topoCard}>
                <Text style={styles.numeroOS}>OS #{ordem.numero}</Text>
                <View style={[styles.badge, { backgroundColor: estiloStatus.Status.corFundo }]}>
                    <Text style={[styles.badgeTexto, { color: estiloStatus.corTexto }]}>
                        {estiloStatus.rotulo}
                    </Text>
                </View>
            </View>

            <Text style={styles.cliente} numberOfLines={1}>
                👤 {ordem.cliente}
            </Text>

            <Text style={styles.servico} numerOfLines={2}>
                🛠️ {ordem.serico}
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