import React, { Component } from 'react'
import * as Permissions from "expo-permissions"
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Text, View, StyleSheet, Button } from "react-native"

export default class Scanner extends Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
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

    _handleBarCodeScanned = ({ type, data }) => {
        this.setState(() => ({
            scanned: true
        }))
        this.props.itemScanned(type, data)
    }

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View>
                <View style={{
                    height: 500,
                }}>
                    <BarCodeScanner
                        type={BarCodeScanner.Constants.Type.back}
                        onBarCodeScanned={scanned ? undefined : this._handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                        torchMode={true}
                    />
                    {scanned && (
                        <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
                    )}
                </View>
            </View>
        );
    }
}

