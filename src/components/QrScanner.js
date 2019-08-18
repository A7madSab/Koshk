import React, { Component } from 'react'
import * as Permissions from "expo-permissions"
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Text, View, StyleSheet, Button } from "react-native"

export default class Scanner extends Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        total: 0
    };

    async componentDidMount() {
        this._getPermissionsAsync();
    }

    _getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState((prev) => ({
            total: Number(prev.total) + Number(data),
            scanned: true
        }))
        console.log("total", this.state.total)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            console.log("hasCameraPermission === null");
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            console.log("hasCameraPermission === false");
            return <Text>No access to camera</Text>;
        }
        console.log("Will render now")
        return (
            <View style={{
                height: 500,
            }}>
                <BarCodeScanner
                    type={BarCodeScanner.Constants.Type.back}
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
                )}

            </View>
        );
    }
}

