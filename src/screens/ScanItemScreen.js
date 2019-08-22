import React from "react"
import { ScrollView, Text } from "react-native"
import QrScanner from "../components/QrScanner"

import FirebaseApi from "../Api/firebaseAPI"
import firebase from "firebase"

import { Button } from 'react-native-elements';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ScanItemScreen extends React.Component {

    state = {
        name: '',
        total: 0,
        items: []
    }

    itemScanned = (type, itemId) => {
        alert(`Bar code type: ${type} itemId: ${itemId}`);

        firebase.database().ref('items/' + itemId).once('value').then(item => {
            const itemObj = item.toJSON();
            this.setState((prev) => ({
                name: itemObj.itemName,
                items: prev.items.concat([itemObj]),
                total: Number(prev.total) + Number(itemObj.itemPrice)
            }))
        })
    }

    onRemoveItem = (item) => {
        console.log(item)
        this.setState(() => ({
            items: this.state.items.filter((i) => item.itemId !== i.itemID)
        }))
    }

    render() {
        return (
            <ScrollView>
                <Text>ScanItemScreen</Text>
                <QrScanner itemScanned={this.itemScanned} />
                <Text> total: {this.state.total} </Text>
                <Text> Name: {this.state.name}</Text>
                <Text> ALL ITEMS </Text>
                {this.state.items.map(item => {
                    return (
                        <View>
                            <Text key={item.itemId}>Name: {item.itemName} Price: {item.itemPrice}</Text>
                            <Button key={item.itemId} title="Remove" onPress={this.onRemoveItem(item)} />
                        </View>
                    )
                })}
                <Text>Done</Text>
            </ScrollView>
        );
    }
}