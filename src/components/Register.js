import React, { Component } from 'react'
import { Text, View, TextInput, Button } from "react-native"
import { styles } from "../styles/Register"
import * as firebase from "firebase"

import SignInWithFacebook from "./SignInWithFacebook"

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false
    }

    OnRegisterPress = () => {
        this.setState(() => ({ error: '' }))
        // console.log(this.state);
        this.setState(() => ({ loading: true }))
        const { email, password } = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                // console.log(res)
            })
            .catch((error) => {
                // console.log(error.code, error.message)
                this.setState(() => ({ error: error.message }))
            });
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.formTitle}> Register From</Text>

                <Text>Name: </Text>
                <TextInput value={this.state.name} onChangeText={(name) => this.setState({ name })} />
                <Text>Email: </Text>
                <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <Text>Password: </Text>
                <TextInput textContentType="password" value={this.state.password} onChangeText={(password) => this.setState({ password })} />

                {this.state.error === '' ? null : <Text>{this.state.error}</Text>}

                <Button title="REGISTER" onPress={this.OnRegisterPress} />
                {/** <SignInWithFacebook /> */}
            </View>
        );
    }
}