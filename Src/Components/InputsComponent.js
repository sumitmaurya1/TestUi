
import React, { Component } from 'react'
import { Icon } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import Colors from '../Assets/Colors';
import { View } from 'react-native';

export default class InputsComponent extends Component {
  render() {
    return (
        <View style={{ paddingVertical: 2 }}>
            <TextInput
            mode="flat"            
            style={{ backgroundColor: 'transparent', fontSize: 16, fontWeight: 'bold', color:Colors.whiteColor }}
            label={this.props.tag}
            placeholderTextColor={"#fff"}
            defaultValue={this.props.dValue}
            underlineColor={Colors.whiteColor}
            activeUnderlineColor="#E88B1D"
            theme={{ colors: { placeholder: '#7A7A7A', text: 'white',  } }}
            left={<TextInput.Icon name={this.props.iconName} size={18} color="#7A7A7A" />}
            />
        </View>
    )
  }
}
