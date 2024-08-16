import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/Splash";

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} />
            {/* <Stack.Screen name="Login" component={} />
            <Stack.Screen name="CreateAccount" component={} />
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