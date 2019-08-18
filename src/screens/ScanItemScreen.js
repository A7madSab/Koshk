import React from "react"
import { View, Text } from "react-native"
import QrScanner from "../components/QrScanner"

export default class ScanItemScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>ScanItemScreen</Text>
                <QrScanner />
            </View>
        );
    }
}