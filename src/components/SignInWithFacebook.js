import React from "react"
import { View, Button } from "react-native"


export default class SignInWithFacebook extends React.Component{
    OnRegisterWithFacebookPress = () => {
        var provider = new firebase.auth.FacebookAuthProvider()
        console.log("OnRegisterWithFacebookPress", provider)
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("Token", token)
            console.log("user", user)
        }).then(console.log("login sucewss"))
            .catch(function (error) {
                console.log("login failed", error.code)
                console.log("login failed", error.message)
            });
    }

    render() {
        return (
            <View>
                <Button title="Register With Facebook" onPress={this.OnRegisterWithFacebookPress} />
            </View>
        );
    }
}