import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation"
import { LoginScreen, RegisterScreen } from "../screens/index"

const Tabs = createMaterialTopTabNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
});


export default createAppContainer(Tabs);
