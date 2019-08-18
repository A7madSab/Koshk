import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation"
import { LoginScreen, RegisterScreen, HomeScreen, AddItemScreen, ReportsScreen, ScanItemScreen, SettingsScreen, StoreInfoScreen } from "../screens/index"

const landingNav = createMaterialTopTabNavigator({
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

const CardNav = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    AddItem: {
        screen: AddItemScreen,
    },
    ScanItem: {
        screen: ScanItemScreen,
    },
    Reports: {
        screen: ReportsScreen,
    },
    Settings: {
        screen: SettingsScreen
    },
    StoreInfo: {
        screen: StoreInfoScreen
    }
})

export default createAppContainer(CardNav);


// https://reactnavigation.org/docs/en/material-top-tab-navigator.html#docsNav
// https://www.youtube.com/watch?v=C96piR3FRww