import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Search from "../pages/search"
import login from "../pages/login"
import Register from "../pages/register"

// STACK ROUTES - Rotas dinamicas, basicamente empilhando telas
const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Login" component={login} />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
                 <Stack.Screen 
                name="Register" 
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    title: "Detalhes do produto"
                }}
            />
            <Stack.Screen 
                name="Search" 
                component={Search} 
                options={{
                    title: "Veja o que encontramos"
                }}
            />
        </Stack.Navigator>
    )
}

