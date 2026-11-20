import { View } from 'react-native';
import Botao from '../components/Botao';

export default function TelaLogin(
    {
        navigation
    }
) {
    return (
        <view>
            <Botao>
                texto="Entrar"
                onPress= {() => navigation.navigate('Lista')}
            </Botao>
        </view>
    );
}

