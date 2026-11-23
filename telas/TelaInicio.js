import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function TelaInicio({ navigation }) {
    const metricas = {
        pendentes: 3,
        emAndamento: 1,
        concluidas: 6,
    };
    const proximaOS = {
        numero: '1042',
        servico: 'Manutenção de Roteador Fibra',
        cliente: 'Empresa Alpha Tech',
        endereco: 'Av. Paulista, 1500 - 4º andar',
        horario: '14:30',
    };
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.saudacao}>Olá, Técnico 👋</Text>
                <Text style={styles.subtitulo}>Confira suas atividades de hoje</Text>
            </View>

            <View style={styles.metricasContainer}>
                <View style={[styles.cardMetrica, { borderLeftColor: '#F59E0B' }]}>
                    <Text style={styles.numeroMetrica}>{metricas.pendentes}</Text>
                    <Text style={styles.labelMetrica}>Pendentes</Text>
                </View>
                <View style={[styles.cardMetrica, { borderLeftColor: COLORS.accent }]}>
                    <Text style={styles.numeroMetrica}>{metricas.emAndamento}</Text>
                    <Text style={styles.labelMetrica}>Em Andamento</Text>
                </View>
                <View style={[styles.cardMetrica, { borderLeftColor: COLORS.success }]}>
                    <Text style={styles.numeroMetrica}>{metricas.concluidas}</Text>
                    <Text style={styles.labelMetrica}>Concluídas</Text>
                </View>
            </View>

            <Text style={styles.secaoTitulo}>Próxima Ordem de Serviço</Text>
            <View style={styles.cardOS}>
                <View style={styles.tagOS}>
                    <Text style={styles.tagOSTexto}>OS #{proximaOS.numero}</Text>
                    <Text style={styles.horario}>{proximaOS.horario}</Text>
                </View>
                <Text style={styles.tituloOS}>{proximaOS.servico}</Text>
                <Text style={styles.clienteOS}>👤 {proximaOS.cliente}</Text>
                <Text style={styles.enderecoOS}>📍 {proximaOS.endereco}</Text>
                <TouchableOpacity
                    style={styles.botaoIniciar}
                    onPress={() => navigation.navigate('Servicos')}
                >
                    <Text style={styles.botaoIniciarTexto}>Ver Detalhes do Serviço</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.secaoTitulo}>Ações Rápidas</Text>
            <View style={styles.acoesContainer}>
                <TouchableOpacity style={styles.botaoAcao} onPress={() => alert('Sincronizando com a API...')}>
                    <Text style={styles.botaoAcaoTexto}>🔄 Sincronizar API</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoAcao} onPress={() => navigation.navigate('Servicos')}>
                    <Text style={styles.botaoAcaoTexto}>📋 Ver Todas as OS</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 20,
        marginBottom: 20,
    },
    saudacao: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    subtitulo: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 4,
    },
    metricasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    cardMetrica: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        padding: 12,
        marginHorizontal: 4,
        borderLeftWidth: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    numeroMetrica: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    labelMetrica: {
        fontSize: 11,
        color: COLORS.textSecondary,
        marginTop: 4,
        fontWeight: '600',
    },
    secaoTitulo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 12,
    },
    cardOS: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
        elevation: 2,
    },
    tagOS: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    tagOSTexto: {
        color: COLORS.accent,
        fontWeight: 'bold',
        fontSize: 13,
    },
    horario: {
        color: COLORS.textSecondary,
        fontSize: 13,
        fontWeight: '600',
    },
    tituloOS: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 8,
    },
    clienteOS: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginBottom: 4,
    },
    enderecoOS: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginBottom: 16,
    },
    botaoIniciar: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: SIZES.radius,
        alignItems: 'center',
    },
    botaoIniciarTexto: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    acoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    botaoAcao: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        paddingVertical: 14,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    botaoAcaoTexto: {
        color: COLORS.textPrimary,
        fontWeight: '600',
        fontSize: 13,
    },
});