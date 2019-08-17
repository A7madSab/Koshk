import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation"
import { LoginScreen, RegisterScreen } from "../screens/index"

const Tabs = createMaterialTopTabNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen
        }
    }, {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
        }
    });

export default createAppContainer(Tabs);


// https://reactnavigation.org/docs/en/material-top-tab-navigator.html#docsNav
// https://www.youtube.com/watch?v=C96piR3FRww