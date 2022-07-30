import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Colors from '../Assets/Colors'

export default class Notification extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.blackColor }}>
            <Text>Notification</Text>
        </View>
    )
  }
}
