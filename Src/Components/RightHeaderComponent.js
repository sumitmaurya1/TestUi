import { Avatar, Icon } from '@rneui/themed'
import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Colors from '../Assets/Colors'

const DimensionWidth = Dimensions.get('window').width

export default class RightHeaderComponent extends Component {
  render() {
    return (
        <View style={{ flex: 1 , flexDirection: 'row',  width: DimensionWidth/2 }}>
            <Icon name="add-circle-outline" type='ionicon' size={30} color={Colors.whiteColor}  />
            {/* <Avatar size={25} rounded source={require('../Assets/Images/img_avatar.png')} /> */}
        </View>
    )
  }
}
