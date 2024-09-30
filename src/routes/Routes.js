import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SplashScreen from "../screens/Splash";
import Home from "../screens/Home";
import RedefinirSenha from "../screens/RedefinirSenha"; 
import Cadastro from "../screens/Cadastro";
import Confirmacoes from "../screens/Confirmacoes";
import ListaConvidados from "../screens/ListaConvidados";

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator
            initialRouteName="ListaConvidados"
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