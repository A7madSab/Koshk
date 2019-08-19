import React from "react"
import { View, Button } from "react-native"
import * as firebase from "firebase"

export default class SignInWithFacebook extends React.Component {
    OnRegisterWithFacebookPress = () => {
        var provider = new firebase.auth.FacebookAuthProvider()

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // console.log("Token: ", token)
            // console.log("User: ", user)
        }).catch(function (error) {
            // console.log("login failed: code", error.code)
            // console.log("login failed: message", error.message)
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