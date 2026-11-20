import { Pressable, Text, StyleSheet } from "react-native";

export default function Botao({ onPress, texto }) {
    return (
        <Pressable style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
        </Pressable>
    );
}