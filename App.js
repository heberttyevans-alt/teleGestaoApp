import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telas/TelaLogin';
import TelaUsuario from './telas/TelaUsuario';
import TelaServicos from './telas/TelaServicos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} options={{ title: 'Login' }} />
        <Stack.Screen name="Usuario" component={TelaUsuario} options={{ title: 'Usuário' }} />
        <Stack.Screen name="Servicos" component={TelaServicos} options={{ title: 'Serviços' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
