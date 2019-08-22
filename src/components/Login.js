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

    AddItemInDatabase = () => {
        // userId, code, itemName, ItemPrice
        const userId = firebaseAPI.currentLoggedInUserId();
        const code = 45612
        const itemName = "Milk"
        const price = 15.5

        firebaseAPI.writeItem(userId, code, itemName, price);
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.formTitle}> Login From</Text>

                <Text>Email: </Text>
                <TextInput keyboardType="email-address" autoCompleteType="email" value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                <Text>Password: </Text>
                <TextInput keyboardType="visible-password" textContentType="textContentType" autoCompleteType="password" textContentType="password" value={this.state.password} onChangeText={(password) => this.setState({ password })} />

                <Button title="Login" onPress={this.OnLoginPress} />
                <Button title="Current logged in user" onPress={this.currentLoggedInUser} />
                <Button title="Current logged in user id" onPress={this.currentLoggedInUserId} />
                <Button title="Logout" onPress={this.logoutUser} />
                <Button title="Go to next page" onPress={this.nextpage} />
                <Button title="Write Something in the database" onPress={this.AddItemInDatabase} />
            </View>
        );
    }
}
