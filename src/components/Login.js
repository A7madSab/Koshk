import React, { Component } from 'react'
import { Text, View, TextInput, Button } from "react-native"
import { styles } from "../styles/Register"
import * as firebase from "firebase"

import SignInWithFacebook from "./SignInWithFacebook"

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    OnLoginPress = async () => {
        console.log(this.state);
        this.setState(() => ({ loading: true }))
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)

            })
            .catch((error) => {
                console.log(error.code, error.message)
            });
        this.setState(() => ({ loading: false }))
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.formTitle}> Login From</Text>

                <Text>Email: </Text>
                <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <Text>Password: </Text>
                <TextInput textContentType="password" value={this.state.password} onChangeText={(password) => this.setState({ password })} />

                <Button title="REGISTER" onPress={this.OnLoginPress} />
                <SignInWithFacebook />
            </View>
        );
    }
}
