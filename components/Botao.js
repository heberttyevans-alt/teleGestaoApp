import { Pressable, Text, StyleSheet } from "react-native";

export default function Botao({ onPress, texto }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado
            ]}
            onPress={onPress}
        >
            <Text style={styles.texto}>{texto}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    botaoPressionado: {
        opacity: 0.8,
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});