import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLogin from './telas/TelaLogin';
import TelaUsuario from './telas/TelaUsuario';
import TelaServicos from './telas/TelaServicos';
import TelaInicio from './telas/TelaInicio';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio" component={TelaInicio} options={{ title: 'Início' }} />
        <Stack.Screen name="Login" component={TelaLogin} options={{ title: 'Login' }} />
        <Stack.Screen name="Usuario" component={TelaUsuario} options={{ title: 'Usuário' }} />
        <Stack.Screen name="Servicos" component={TelaServicos} options={{ title: 'Serviços' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
