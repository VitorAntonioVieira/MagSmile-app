import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SplashScreen from "../screens/Splash";

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
            {/* <Stack.Screen name="CreateAccount" component={} />
            <Stack.Screen name="Redefine" component={} />
            <Stack.Screen name="App" component={AppScreen} /> */}
        </Stack.Navigator>
    );
}

const Tabs = createBottomTabNavigator();

// const AppScreen = () => {
//     return (
//         <Tabs.Navigator>
//             <Tabs.Screen name="Home" component={} />
//             <Tabs.Screen name="Events" component={} />
//             <Tabs.Screen name="CreateEvent" component={} />
//         </Tabs.Navigator>
//     );
// }

export default Main;