import { createNativeStackNavigator } from "@react-navigation/native-stack"; import TelaLogin from "./TelaLogin";

const Stack = createNativeStackNavigator();

function Abas() {
    <TabActions.Navigator>
        <Tab.Screen name="Ínicio" component={TelaInicio} />
        <Tab.Screen name="Serviços" component={TelaServicos} />
        <Tab.Screen name="Usuário" componente={TelaUsuario} />
    </TabActions.Navigator>
};

export default function RaizStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={TelaLogin} />
            <Stack.Screen name="Abas" component={Abas} />
        </Stack.Navigator>
    );
};

