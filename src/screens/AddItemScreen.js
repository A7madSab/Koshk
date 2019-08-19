import React, { Component } from "react"
import { Text, TextInput, ScrollView } from "react-native"
import QrScanner from "../components/QrScanner"
import firebaseAPI from "../Api/firebaseAPI"

export default class AddItemScreen extends Component {
    state = {
        name: '',
        price: ''
    }

    itemScanned = (type, data) => {
        console.log(firebaseAPI.currentLoggedInUserId())
        alert(`Bar code type: ${type} Data: ${data} Name:${this.state.name} Price:${this.state.price} UserID: ${firebaseAPI.currentLoggedInUserId()} `);
        firebaseAPI.writeItem(firebaseAPI.currentLoggedInUserId(), data, this.state.name, this.state.price)
    }

    render() {
        return (
            <ScrollView>
                <QrScanner itemScanned={this.itemScanned} />
                <Text>Item Name:</Text>
                <TextInput placeholder="Item Name" value={this.state.name} onChangeText={(name) => this.setState(() => ({ name }))} />
                <Text>Item Price:</Text>
                <TextInput placeholder="Item Price" value={this.state.price} onChangeText={(price) => this.setState(() => ({ price }))} />
            </ScrollView>
        );
    }
} 