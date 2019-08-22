import React, { Component } from "react"
import { Text, TextInput, ScrollView } from "react-native"
import QrScanner from "../components/QrScanner"
import firebaseAPI from "../Api/firebaseAPI"

export default class AddItemScreen extends Component {
    state = {
        name: '',
        price: ''
    }


    itemScanned = (type, itemId) => {
        debugger
        if (this.state.name !== '' && this.state.price !== '') {
            console.log(firebaseAPI.currentLoggedInUserId())
            alert(`Bar code type: ${type} itemId: ${itemId} Name:${this.state.name} Price:${this.state.price} UserID: ${firebaseAPI.currentLoggedInUserId()} `);
            firebaseAPI.writeItem(firebaseAPI.currentLoggedInUserId(), itemId, this.state.name, this.state.price)
        } else {
            alert(`Insert All data`);
        }
        this.setState({ name: '', price: '' })
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