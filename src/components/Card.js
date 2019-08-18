import React from "react"
import { Text, Button, View, PanResponder } from "react-native"

import { Card } from "react-native-elements"

export default class CardComponent extends React.Component {
    render() {
        return (
            <Card title={this.props.title}>
                <Text>loooo </Text>
            </Card>
        );
    }
}



// constructor(props) {
//     super(props)
//     const panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: this.onCardPress
//     })
//     this.state = { panResponder }
// }
// onCardPress = (e) => {
//     console.log(this.props.title, "--->", e)
//     this.props.onPress()
// }
// {/**{...this.state.panResponder.panHandlers} */}