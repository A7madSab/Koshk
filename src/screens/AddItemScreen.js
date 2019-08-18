import React, { Component } from "react"
import { Text, View } from "react-native"
import QrScanner from "../components/QrScanner"

export default class AddItemScreen extends Component {
    render() {
        return (
            <View>
                <Text>AddItemScreen</Text>
                <QrScanner />
            </View>
        );
    }
} 