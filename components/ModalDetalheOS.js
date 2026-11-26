import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import Botao from './Botao';

export default function ModalDetalhesOS({ visivel, ordem, onFechar, onMudarStatus }) {
    // Valores animados para transição suave
    const animacaoY = useRef(new Animated.Value(-600)).current; // Começa escondido no topo
    const opacidadeFundo = useRef(new Animated.Value(0)).current; // Fundo escuro transparente

    useEffect(() => {
        if (visivel) {
            // Animação descendo de cima para baixo
            Animated.parallel([
                Animated.timing(opacidadeFundo, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(animacaoY, {
                    toValue: 0,
                    duration: 380, // Duração ideal para um deslize suave
                    easing: Easing.out(Easing.cubic), // Curva de desaceleração suave
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visivel]);

    // Animação de saída: sobe de volta para o topo antes de fechar
    const fecharComAnimacao = () => {
        Animated.parallel([
            Animated.timing(opacidadeFundo, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(animacaoY, {
                toValue: -600,
                duration: 280,
                easing: Easing.in(Easing.cubic),
                useNativeDriver: true,
            }),
        ]).start(() => {
            onFechar(); // Fecha o modal após a animação terminar
        });
    };

    if (!visivel && !ordem) return null;

    return (
        <Modal
            transparent
            visible={visivel}
            animationType="none" // Desativa a animação nativa para usarmos a nossa customizada
            onRequestClose={fecharComAnimacao}
        >
            {/* Fundo escuro com opacidade animada */}
            <Animated.View style={[styles.fundoOverlay, { opacity: opacidadeFundo }]}>
                {/* Permite tocar fora para fechar */}
                <TouchableWithoutFeedback onPress={fecharComAnimacao}>
                    <View style={StyleSheet.absoluteFillObject} />
                </TouchableWithoutFeedback>

                {/* Conteúdo do Modal descendo do topo */}
                <Animated.View
                    style={[
                        styles.conteudoModal,
                        { transform: [{ translateY: animacaoY }] }
                    ]}
                >
                    {/* Linha de Fechamento / Aba superior */}
                    <View style={styles.topoModal}>
                        <View>
                            <Text style={styles.numeroOS}>ORDEM DE SERVIÇO</Text>
                            <Text style={styles.tituloModal}>OS #{ordem?.numero}</Text>
                        </View>
                        <TouchableOpacity onPress={fecharComAnimacao} style={styles.botaoFechar}>
                            <Text style={styles.textoFechar}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollConteudo}>
                        {/* Dados da Ordem */}
                        <Text style={styles.label}>CLIENTE SOLICITANTE</Text>
                        <Text style={styles.valorPrincipal}>👤 {ordem?.cliente}</Text>

                        <Text style={styles.label}>TIPO DE SERVIÇO</Text>
                        <Text style={styles.valor}>🛠️ {ordem?.servico}</Text>

                        <Text style={styles.label}>ENDEREÇO DO ATENDIMENTO</Text>
                        <Text style={styles.valor}>📍 {ordem?.endereco || 'Endereço não informado'}</Text>

                        <Text style={styles.label}>DATA E HORÁRIO AGENDADO</Text>
                        <Text style={styles.valor}>📅 {ordem?.data} {ordem?.horario ? `• 🕒 ${ordem?.horario}` : ''}</Text>

                        {/* Botões de Ação Dinâmicos */}
                        <View style={styles.acoesContainer}>
                            {ordem?.status === 'aberto' && (
                                <Botao
                                    texto="🛠️ Pegar esta OS"
                                    onPress={() => {
                                        onMudarStatus(ordem.id, 'andamento');
                                        fecharComAnimacao();
                                    }}
                                />
                            )}

                            {ordem?.status === 'andamento' && (
                                <Botao
                                    texto="✅ Concluir Atendimento"
                                    onPress={() => {
                                        onMudarStatus(ordem.id, 'encerrado');
                                        fecharComAnimacao();
                                    }}
                                />
                            )}

                            {ordem?.status === 'encerrado' && (
                                <TouchableOpacity
                                    style={styles.botaoReabrir}
                                    onPress={() => {
                                        onMudarStatus(ordem.id, 'andamento');
                                        fecharComAnimacao();
                                    }}
                                >
                                    <Text style={styles.textoReabrir}>↩️ Desfazer / Reabrir OS</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </ScrollView>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    fundoOverlay: {
        flex: 1,
        backgroundColor: 'rgba(15, 23, 42, 0.65)', // Escurece o fundo com tom corporativo suave
        justifyContent: 'flex-start', // Alinha no TOPO
    },
    conteudoModal: {
        backgroundColor: COLORS.surface,
        borderBottomLeftRadius: 24, // Cantos arredondados na parte inferior
        borderBottomRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 45, // Espaço seguro para o topo/status bar
        paddingBottom: 24,
        maxHeight: '80%', // Ocupa no máximo 80% da tela descendo
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    topoModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        marginBottom: 10,
    },
    numeroOS: {
        fontSize: 11,
        fontWeight: 'bold',
        color: COLORS.accent,
        letterSpacing: 1,
    },
    tituloModal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    botaoFechar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoFechar: {
        fontSize: 16,
        color: COLORS.textSecondary,
        fontWeight: 'bold',
    },
    scrollConteudo: {
        paddingTop: 6,
    },
    label: {
        fontSize: 11,
        color: COLORS.textSecondary,
        fontWeight: '700',
        marginTop: 14,
        letterSpacing: 0.5,
    },
    valorPrincipal: {
        fontSize: 17,
        color: COLORS.textPrimary,
        fontWeight: 'bold',
        marginTop: 3,
    },
    valor: {
        fontSize: 14,
        color: COLORS.textPrimary,
        fontWeight: '500',
        marginTop: 3,
        lineHeight: 20,
    },
    acoesContainer: {
        marginTop: 24,
        marginBottom: 8,
    },
    botaoReabrir: {
        paddingVertical: 14,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        borderColor: '#F59E0B',
        backgroundColor: '#FEF3C7',
        alignItems: 'center',
    },
    textoReabrir: {
        color: '#D97706',
        fontWeight: 'bold',
        fontSize: 14,
    },
});