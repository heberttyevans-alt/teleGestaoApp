import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
        backgroundColor: COLORS.background,
    },
    texto: {
        fontSize: SIZES.title,
        color: '#333',
    },
});
