import { View, Text, StyleSheet } from 'react-native';

export default function TelaUsuario({ navigation }) {
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
