import React, { Component } from 'react'
import { View , Text} from 'react-native'
import Colors from '../Assets/Colors'

export default class Test extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent : 'center', backgroundColor: Colors.blackColor }}>
            <Text>Chat</Text>
        </View>
    )
  }
}
