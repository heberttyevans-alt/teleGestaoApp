import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Switch,
    Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, SIZES } from '../constants/theme';

export default function TelaUsuario({ navigation }) {
    const [foto, setFoto] = useState(null);
    const [status, setStatus] = useState('Disponível');
    const [notificacoes, setNotificacoes] = useState(true);

    const dadosUsuario = {
        nome: 'Hebertty Luiz',
        cargo: 'Técnico de informática Operacional',
        matricula: 'TG-4092',
        email: 'hebertty@telegestao.com.br',
        telefone: '(00) 98765-4321',
        polo: 'Polo Lavras-MG',
        veiculo: 'Fiorino (ABC-1D23)',
        estatisticas: {
            concluidas: 48,
            avaliacao: '4.9',
            tempoMedio: '42 min'
        }
    };

    const escolherDaGaleria = async () => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissao.granted) {
            Alert.alert('Permissão necessária', 'Para alterar a foto usando uma já existente, permita o acesso a galeria.');
            return;
        }

        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!resultado.canceled) {
            setFoto(resultado.assets[0].uri);
        }
    };

    const tirarFoto = async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissao.granted) {
            Alert.alert('Permissão necessária', 'Para tirar uma nova foto e usá-la, conceda o acesso a câmera.');
            return;
        }

        const resultado = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!resultado.canceled) {
            setFoto(resultado.assets[0].uri);
        }
    };

    const abrirOpcoesFoto = () => {
        Alert.alert(
            'Foto de Perfil',
            'Como você deseja escolher sua foto?',
            [
                { text: 'Tirar Foto com a Câmera', onPress: tirarFoto },
                { text: 'Escolher da Galeria', onPress: escolherDaGaleria },
                { text: 'Cancelar', style: 'cancel' }
            ]
        );
    };

    const handleLogout = () => {
        Alert.alert(
            'Sair da Conta',
            'Deseja realmente encerrar sua sessão?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Sair',
                    style: 'destructive',
                    onPress: () => navigation.navigate('Login')
                }
            ]
        );
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.headerCard}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        {foto ? (
                            <Image source={{ uri: foto }} style={styles.avatarImagem} />
                        ) : (
                            <Text style={styles.avatarTexto}>HL</Text>
                        )}
                    </View>
                    <TouchableOpacity
                        style={styles.botaoEditarFoto}
                        onPress={abrirOpcoesFoto}
                    >
                        <Text style={styles.iconeCamera}>📷</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.nome}>{dadosUsuario.nome}</Text>
                <Text style={styles.cargo}>{dadosUsuario.cargo}</Text>
                <Text style={styles.matricula}>Matrícula: {dadosUsuario.matricula}</Text>

                <View style={styles.statusContainer}>
                    <TouchableOpacity
                        style={[styles.statusBotao, status === 'Disponível' && styles.statusAtivoVerde]}
                        onPress={() => setStatus('Disponível')}
                    >
                        <Text style={[styles.statusTexto, status === 'Disponível' && styles.statusTextoAtivo]}>
                            🟢 Disponível
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.statusBotao, status === 'Em Atendimento' && styles.statusAtivoAmarelo]}
                        onPress={() => setStatus('Em Atendimento')}
                    >
                        <Text style={[styles.statusTexto, status === 'Em Atendimento' && styles.statusTextoAtivo]}>
                            🟡 Em Atendimento
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.statusBotao, status === 'Pausa' && styles.statusAtivoCinza]}
                        onPress={() => setStatus('Pausa')}
                    >
                        <Text style={[styles.statusTexto, status === 'Pausa' && styles.statusTextoAtivo]}>
                            ⚪ Pausa
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.secaoTitulo}>Desempenho no Mês</Text>
            <View style={styles.estatisticasContainer}>
                <View style={styles.cardEstatistica}>
                    <Text style={styles.numeroEstatistica}>{dadosUsuario.estatisticas.concluidas}</Text>
                    <Text style={styles.labelEstatistica}>OS Concluídas</Text>
                </View>
                <View style={styles.cardEstatistica}>
                    <Text style={[styles.numeroEstatistica, { color: '#F59E0B' }]}>⭐ {dadosUsuario.estatisticas.avaliacao}</Text>
                    <Text style={styles.labelEstatistica}>Avaliação</Text>
                </View>
                <View style={styles.cardEstatistica}>
                    <Text style={[styles.numeroEstatistica, { color: COLORS.accent }]}>{dadosUsuario.estatisticas.tempoMedio}</Text>
                    <Text style={styles.labelEstatistica}>Tempo Médio</Text>
                </View>
            </View>

            <Text style={styles.secaoTitulo}>Dados Corporativos & Contato</Text>
            <View style={styles.cardDados}>
                <View style={styles.itemDado}>
                    <Text style={styles.labelDado}>📧 E-mail</Text>
                    <Text style={styles.valorDado}>{dadosUsuario.email}</Text>
                </View>
                <View style={styles.divisor} />
                <View style={styles.itemDado}>
                    <Text style={styles.labelDado}>📱 Celular</Text>
                    <Text style={styles.valorDado}>{dadosUsuario.telefone}</Text>
                </View>
                <View style={styles.divisor} />
                <View style={styles.itemDado}>
                    <Text style={styles.labelDado}>🏢 Polo de Atuação</Text>
                    <Text style={styles.valorDado}>{dadosUsuario.polo}</Text>
                </View>
                <View style={styles.divisor} />
                <View style={styles.itemDado}>
                    <Text style={styles.labelDado}>🚗 Veículo Vinculado</Text>
                    <Text style={styles.valorDado}>{dadosUsuario.veiculo}</Text>
                </View>
            </View>

            <Text style={styles.secaoTitulo}>Configurações do Aplicativo</Text>
            <View style={styles.cardDados}>
                <View style={styles.itemDadoLinha}>
                    <Text style={styles.labelDado}>🔔 Notificações de Novas OS</Text>
                    <Switch
                        value={notificacoes}
                        onValueChange={setNotificacoes}
                        trackColor={{ false: '#CBD5E1', true: COLORS.accent }}
                        thumbColor="#FFFFFF"
                    />
                </View>
                <View style={styles.divisor} />
                <TouchableOpacity
                    style={styles.itemDadoLinha}
                    onPress={() => Alert.alert('API', 'Sincronizando dados com o servidor...')}
                >
                    <Text style={styles.labelDado}>🔄 Sincronizar com o Servidor</Text>
                    <Text style={styles.seta}>›</Text>
                </TouchableOpacity>
                <View style={styles.divisor} />
                <TouchableOpacity
                    style={styles.itemDadoLinha}
                    onPress={() => Alert.alert('Segurança', 'Abrir tela de alteração de senha')}
                >
                    <Text style={styles.labelDado}>🔒 Alterar Senha</Text>
                    <Text style={styles.seta}>›</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout}>
                <Text style={styles.botaoLogoutTexto}>🚪 Sair da Conta</Text>
            </TouchableOpacity>

            <Text style={styles.versaoApp}>Tele Gestão Mobile • Versão 1.0.0</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
    },
    headerCard: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        padding: 20,
        marginTop: 16,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 12,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatarImagem: {
        width: '100%',
        height: '100%',
    },
    avatarTexto: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    botaoEditarFoto: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.accent,
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    iconeCamera: {
        fontSize: 12,
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 2,
    },
    cargo: {
        fontSize: 14,
        color: COLORS.accent,
        fontWeight: '600',
        marginBottom: 2,
    },
    matricula: {
        fontSize: 12,
        color: COLORS.textSecondary,
        marginBottom: 16,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        gap: 6,
    },
    statusBotao: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#F1F5F9',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    statusAtivoVerde: {
        backgroundColor: '#DCFCE7',
        borderColor: '#10B981',
    },
    statusAtivoAmarelo: {
        backgroundColor: '#FEF3C7',
        borderColor: '#F59E0B',
    },
    statusAtivoCinza: {
        backgroundColor: '#E2E8F0',
        borderColor: '#94A3B8',
    },
    statusTexto: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.textSecondary,
    },
    statusTextoAtivo: {
        color: COLORS.textPrimary,
    },
    secaoTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 10,
    },
    estatisticasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 8,
    },
    cardEstatistica: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        padding: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        elevation: 1,
    },
    numeroEstatistica: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    labelEstatistica: {
        fontSize: 11,
        color: COLORS.textSecondary,
        fontWeight: '600',
        textAlign: 'center',
    },
    cardDados: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: COLORS.border,
        elevation: 1,
    },
    itemDado: {
        paddingVertical: 10,
    },
    itemDadoLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    labelDado: {
        fontSize: 13,
        color: COLORS.textSecondary,
        fontWeight: '500',
    },
    valorDado: {
        fontSize: 14,
        color: COLORS.textPrimary,
        fontWeight: '600',
        marginTop: 2,
    },
    seta: {
        fontSize: 20,
        color: COLORS.textSecondary,
        fontWeight: 'bold',
    },
    divisor: {
        height: 1,
        backgroundColor: COLORS.border,
    },
    botaoLogout: {
        backgroundColor: '#FEE2E2',
        borderWidth: 1,
        borderColor: '#FCA5A5',
        paddingVertical: 14,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        marginBottom: 12,
    },
    botaoLogoutTexto: {
        color: COLORS.error,
        fontWeight: 'bold',
        fontSize: 15,
    },
    versaoApp: {
        textAlign: 'center',
        fontSize: 12,
        color: COLORS.textSecondary,
        marginBottom: 30,
    },
});