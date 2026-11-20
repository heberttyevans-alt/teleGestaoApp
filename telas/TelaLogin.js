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

