import React from "react"
import { View, TouchableOpacity, ScrollView } from "react-native"
import Card from "../components/Card"

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <TouchableOpacity onPress={() => (this.props.navigation.navigate("AddItem"))}>
                        <Card title="Add Item"></Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => (this.props.navigation.navigate("ScanItem"))}>
                        <Card title="Scan Item" ></Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => (this.props.navigation.navigate("Reports"))}>
                        <Card title="View Reports" ></Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => (this.props.navigation.navigate("Settings"))}>
                        <Card title="Settings" ></Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => (this.props.navigation.navigate("StoreInfo"))}>
                        <Card title="Store Info" ></Card>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}