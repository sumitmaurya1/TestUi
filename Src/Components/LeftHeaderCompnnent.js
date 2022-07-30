import { Icon } from '@rneui/themed'
import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Colors from '../Assets/Colors'

const DimensionWidth = Dimensions.get('window').width

export default class LeftHeaderCompnnent extends Component {
  render() {
    return (
        <View style={{ flex: 1 , flexDirection: 'row',  width: DimensionWidth/2, alignItems: 'center'  }}>
            <Icon name="location-outline" type='ionicon' size={23} color={Colors.whiteColor}  />
            <Text style={{ fontWeight: '600', fontSize: 15, paddingLeft: 8 }}>Bengalaru</Text>
        </View>
    )
  }
}
