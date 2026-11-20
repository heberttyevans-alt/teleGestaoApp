import { View, Text } from 'react-native';
import Botao from '../components/Botao';

export default function TelaLogin({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bem-vindo ao Tele Gestão</Text>
            <Botao texto="Entrar" onPress={() => navigation.navigate('Lista')} />
        </View>
    );
}

