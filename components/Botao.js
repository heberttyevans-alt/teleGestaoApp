import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

export default function Botao({ onPress, texto, carregando = false }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado
            ]}
            onPress={onPress}
            disabaled={carregando}
        >
            {carregando ? (<ActivityIndicator size="small" color="#FFFFFF" />) : (
                <Text style={styles.texto}>{texto}</Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        minWidth: 150,
        borderRadius: SIZES.radius,
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