import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Lista from '../components/Lista';
import ModalDetalheOS from '../components/ModalDetalheOS';
import { COLORS, SIZES } from '../constants/theme';

export default function TelaServicos() {
    // 1. Estado da sanfona (inicia com 'aberto' expandido por padrão)
    const [secaoAberta, setSecaoAberta] = useState('aberto');

    // 2. Estados para controle do Modal
    const [modalVisivel, setModalVisivel] = useState(false);
    const [osSelecionada, setOsSelecionada] = useState(null);

    // 3. Base de dados simulada (mock)
    const [ordens, setOrdens] = useState([
        {
            id: '1',
            numero: '1041',
            cliente: 'Hospital Central Leste',
            servico: 'Reparo emergencial de fibra óptica rompida',
            endereco: 'Rua das Flores, 120 - Bloco B',
            data: '25/11/2026',
            horario: '10:00',
            status: 'aberto',
        },
        {
            id: '2',
            numero: '1042',
            cliente: 'Padaria e Confeitaria Pão Dourado',
            servico: 'Instalação de roteador Wi-Fi empresarial',
            endereco: 'Av. Paulista, 850',
            data: '25/11/2026',
            horario: '14:30',
            status: 'aberto',
        },
        {
            id: '3',
            numero: '1039',
            cliente: 'Alpha Tech Informática',
            servico: 'Configuração de link dedicado de 500 Mbps',
            endereco: 'Rua do Comércio, 400 - Sala 302',
            data: '25/11/2026',
            horario: '11:15',
            status: 'andamento',
        },
        {
            id: '4',
            numero: '1035',
            cliente: 'Escola Futuro Brilhante',
            servico: 'Substituição de conectores ópticos e conectorização',
            endereco: 'Rua dos Estudantes, 45',
            data: '24/11/2026',
            horario: '16:00',
            status: 'encerrado',
        },
        {
            id: '5',
            numero: '1032',
            cliente: 'Condomínio Residencial Parque Verde',
            servico: 'Fusão de fibra no armário de distribuição (DIO)',
            endereco: 'Av. das Américas, 3000',
            data: '24/11/2026',
            horario: '09:00',
            status: 'encerrado',
        },
    ]);

    // Filtra as ordens de acordo com o status
    const ordensAbertas = ordens.filter(o => o.status === 'aberto');
    const ordensAndamento = ordens.filter(o => o.status === 'andamento');
    const ordensEncerradas = ordens.filter(o => o.status === 'encerrado');

    // Alterna abrir/fechar da sanfona
    const toggleSecao = (secao) => {
        setSecaoAberta(secaoAberta === secao ? null : secao);
    };

    // Abre o Modal com os detalhes da OS clicada
    const abrirModalOS = (ordem) => {
        setOsSelecionada(ordem);
        setModalVisivel(true);
    };

    // Fecha o Modal
    const fecharModalOS = () => {
        setModalVisivel(false);
        setOsSelecionada(null);
    };

    // Muda o status da OS em tempo real (faz a ordem pular de sanfona)
    const mudarStatusOS = (id, novoStatus) => {
        setOrdens(ordensAnteriores =>
            ordensAnteriores.map(item =>
                item.id === id ? { ...item, status: novoStatus } : item
            )
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Cabeçalho da Tela */}
                <View style={styles.header}>
                    <Text style={styles.titulo}>Ordens de Serviço</Text>
                    <Text style={styles.subtitulo}>Acompanhe, assuma e encerre seus atendimentos</Text>
                </View>

                {/* ========================================== */}
                {/* 1. SANFONA: EM ABERTO                      */}
                {/* ========================================== */}
                <View style={styles.secaoCard}>
                    <TouchableOpacity
                        style={[styles.cabecalhoSanfona, { borderLeftColor: '#F59E0B' }]}
                        onPress={() => toggleSecao('aberto')}
                        activeOpacity={0.7}
                    >
                        <View style={styles.infoSanfona}>
                            <Text style={styles.iconeStatus}>🟡</Text>
                            <Text style={styles.tituloSanfona}>Em Aberto</Text>
                            <View style={[styles.badgeContador, { backgroundColor: '#FEF3C7' }]}>
                                <Text style={[styles.textoContador, { color: '#D97706' }]}>
                                    {ordensAbertas.length}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.setaSanfona}>
                            {secaoAberta === 'aberto' ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>

                    {secaoAberta === 'aberto' && (
                        <View style={styles.corpoSanfona}>
                            <Lista
                                dados={ordensAbertas}
                                onSelectOS={abrirModalOS}
                                mensagemVazia="Nenhuma OS em aberto no momento."
                            />
                        </View>
                    )}
                </View>

                {/* ========================================== */}
                {/* 2. SANFONA: EM ANDAMENTO                   */}
                {/* ========================================== */}
                <View style={styles.secaoCard}>
                    <TouchableOpacity
                        style={[styles.cabecalhoSanfona, { borderLeftColor: COLORS.accent }]}
                        onPress={() => toggleSecao('andamento')}
                        activeOpacity={0.7}
                    >
                        <View style={styles.infoSanfona}>
                            <Text style={styles.iconeStatus}>🔵</Text>
                            <Text style={styles.tituloSanfona}>Em Andamento</Text>
                            <View style={[styles.badgeContador, { backgroundColor: '#E0F2FE' }]}>
                                <Text style={[styles.textoContador, { color: COLORS.accent }]}>
                                    {ordensAndamento.length}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.setaSanfona}>
                            {secaoAberta === 'andamento' ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>

                    {secaoAberta === 'andamento' && (
                        <View style={styles.corpoSanfona}>
                            <Lista
                                dados={ordensAndamento}
                                onSelectOS={abrirModalOS}
                                mensagemVazia="Você não tem nenhuma OS em andamento."
                            />
                        </View>
                    )}
                </View>

                {/* ========================================== */}
                {/* 3. SANFONA: ENCERRADAS                     */}
                {/* ========================================== */}
                <View style={styles.secaoCard}>
                    <TouchableOpacity
                        style={[styles.cabecalhoSanfona, { borderLeftColor: COLORS.success }]}
                        onPress={() => toggleSecao('encerrado')}
                        activeOpacity={0.7}
                    >
                        <View style={styles.infoSanfona}>
                            <Text style={styles.iconeStatus}>🟢</Text>
                            <Text style={styles.tituloSanfona}>Encerradas</Text>
                            <View style={[styles.badgeContador, { backgroundColor: '#D1FAE5' }]}>
                                <Text style={[styles.textoContador, { color: '#059669' }]}>
                                    {ordensEncerradas.length}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.setaSanfona}>
                            {secaoAberta === 'encerrado' ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>

                    {secaoAberta === 'encerrado' && (
                        <View style={styles.corpoSanfona}>
                            <Lista
                                dados={ordensEncerradas}
                                onSelectOS={abrirModalOS}
                                mensagemVazia="Nenhuma OS encerrada recentemente."
                            />
                        </View>
                    )}
                </View>

            </ScrollView>

            {/* Modal Deslizando do Topo */}
            <ModalDetalheOS
                visivel={modalVisivel}
                ordem={osSelecionada}
                onFechar={fecharModalOS}
                onMudarStatus={mudarStatusOS}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 40,
    },
    header: {
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    subtitulo: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginTop: 4,
    },
    secaoCard: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        overflow: 'hidden',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    cabecalhoSanfona: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderLeftWidth: 5, // Destaque visual da cor de status
    },
    infoSanfona: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconeStatus: {
        fontSize: 12,
        marginRight: 8,
    },
    tituloSanfona: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginRight: 10,
    },
    badgeContador: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    textoContador: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    setaSanfona: {
        fontSize: 12,
        color: COLORS.textSecondary,
        fontWeight: 'bold',
    },
    corpoSanfona: {
        paddingHorizontal: 14,
        paddingBottom: 10,
        backgroundColor: '#FAFCFE', // Fundo sutilmente diferente para destacar os cartões dentro
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
});