import React, { Component } from 'react'
import { Text, View, TextInput, Button } from "react-native"
import { styles } from "../styles/Register"
// import * as firebase from "firebase"
// import SignInWithFacebook from "./SignInWithFacebook"

import firebaseAPI from "../Api/firebaseAPI"

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    // componentWillMount() {
    //     // console.log(this.props)
    // }

    OnLoginPress = () => {
        this.setState(() => ({ loading: true }))
        firebaseAPI.signInWithEmailAndPassword(this.state.email, this.state.password)
        this.setState(() => ({ loading: false }))
    }

    logoutUser = () => {
        firebaseAPI.logoutUser()
    }

    currentLoggedInUser = () => {
        firebaseAPI.currentLoggedInUser()
    }

    currentLoggedInUserId = () => {
        firebaseAPI.currentLoggedInUserId()
    }

    nextpage = () => {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.formTitle}> Login From</Text>

                <Text>Email: </Text>
                <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <Text>Password: </Text>
                <TextInput textContentType="password" value={this.state.password} onChangeText={(password) => this.setState({ password })} />

                <Button title="Login" onPress={this.OnLoginPress} />
                <Button title="Current logged in user" onPress={this.currentLoggedInUser} />
                <Button title="Current logged in user id" onPress={this.currentLoggedInUserId} />
                <Button title="Logout" onPress={this.logoutUser} />
                <Button title="Go to next page" onPress={this.nextpage} />
            </View>
        );
    }
}
