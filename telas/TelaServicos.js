import { View, Text, StyleSheet } from 'react-native';

export default function TelaServicos({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Tela de Serviços</Text>
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
