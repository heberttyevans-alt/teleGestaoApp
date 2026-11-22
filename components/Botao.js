import { Pressable, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

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
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
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