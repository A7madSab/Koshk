import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation"
import { LoginScreen, RegisterScreen, HomeScreen, AddItemScreen, ReportsScreen, ScanItemScreen, SettingsScreen, StoreInfoScreen } from "../screens/index"

const AuthStack = createMaterialTopTabNavigator({
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen
    }
});

const AppStack = createStackNavigator({
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


const Navigation = createSwitchNavigator(
    {
        AuthStack: {
            screen: AuthStack
        },
        AppStack: {
            screen: AppStack,
        },
    }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
    })


export default createAppContainer(Navigation)

