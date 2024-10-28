import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SplashScreen from "../screens/Splash";
import Home from "../screens/Home";
import RedefinirSenha from "../screens/RedefinirSenha";
import Cadastro from "../screens/Cadastro";
import Confirmacoes from "../screens/Confirmacoes";
import ListaConvidados from "../screens/ListaConvidados";
import Planejamento from "../screens/Planejamento";
<<<<<<< HEAD
import PartyStyleScreen from "../screens/Estilo";
=======
import Paleta from "../screens/Paleta";
import Seletor from "../screens/Seletor";
>>>>>>> d2fe35634d3a16b852ac6c375765352108070f26

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
        >
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RedefinirSenha"
                component={RedefinirSenha}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Confirmacoes"
                component={Confirmacoes}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ListaConvidados"
                component={ListaConvidados}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Planejamento"
                component={Planejamento}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Estilo"
                component={PartyStyleScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Seletor"
                component={Seletor}
                options={{
                    headerShown: false
                }}
            />
            {/* <Stack.Screen name="CreateAccount" component={} />
            <Stack.Screen name="Redefine" component={} />
            <Stack.Screen name="App" component={AppScreen} /> */}
        </Stack.Navigator>
    );
}

const Tabs = createBottomTabNavigator();

const AppScreen = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
        </Tabs.Navigator>
    );
}

export default Main;