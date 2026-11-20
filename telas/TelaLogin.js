import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao';

export default function TelaLogin({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo ao Tele Gestão</Text>
            <Botao texto="Entrar" onPress={() => navigation.navigate('Servicos')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
});
