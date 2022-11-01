
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login';
import CadastroScreen from './Screens/Cadastro';
import InicioScreen from './Screens/Inicio';
import NovoContatoScreen from './Screens/NovoContato';
import AlterarContatoScreen from './Screens/AlterarContato';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Inicio" component={InicioScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="NovoContato" component={NovoContatoScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="AlterarContato" component={AlterarContatoScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

