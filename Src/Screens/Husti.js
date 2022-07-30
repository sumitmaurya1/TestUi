import { Avatar, Header, Icon } from '@rneui/themed'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, FlatList, Pressable } from 'react-native'
import Colors from '../Assets/Colors'
import InputsComponent from '../Components/InputsComponent'
import LeftHeaderCompnnent from '../Components/LeftHeaderCompnnent'
import ActionButton from 'react-native-circular-action-menu';


export default class Husti extends Component {
  constructor(props){
    super(props)
    this.state ={
      avatar : [
        { img : require('../Assets/Images/img_avatar.png') },
        { img : require('../Assets/Images/img_avatar.png') },
        { img : require('../Assets/Images/img_avatar.png') },
        { img : require('../Assets/Images/img_avatar.png') },
        { img : require('../Assets/Images/img_avatar.png') },
      ]
    }
  }
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.blackColor }}>
            <Header backgroundColor={Colors.blackColor} containerStyle={{ borderBottomColor: Colors.blackColor, justifyContent: 'center' }}
              leftComponent={<LeftHeaderCompnnent />}
              rightComponent={
                <View style={styles.headerRight}>
                    <Icon name="add-circle-outline" color="white" type='ionicon' size={29} style={{ paddingRight:10 }} />
                    <Avatar size={29} rounded source={require('../Assets/Images/img_avatar.png')} />
                </View>
            }

            />
            <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 10 }}>
              <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 18, color: Colors.whiteColor }}>Logo Desgin Breif</Text>
                      <View style={{ flexDirection: 'row', alignItems:'center' }}>
                        <Icon name='play-circle-outline' type='ionicon' color={Colors.primaryColor} size={20} />
                        <View style={{ marginTop: '5%' }}>
                          <Image source={require('../Assets/Images/freq.png')} style={{ height: 40, width: 110,  }}  />
                        </View>
                      </View>
                    </View>

                    <View>
                      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                      <Text style={{ paddingTop: 10 }}>It is a long established fact that a reader will be distracted by the readable content of a</Text>
                    </View>

                    <View style={{  }}>
                        <InputsComponent tag="Tags" dValue="Fun minmal, Attractive" iconName="tag-outline" />
                        <InputsComponent tag="Location" dValue="any" iconName="map-marker-outline" />
                        <InputsComponent tag="Category" dValue="Logo desgin and interface" iconName="shape-outline" />
                        <InputsComponent tag="Posted On" dValue="08 Aug 2022" iconName="calendar-month" />
                        <InputsComponent tag="Due On" dValue="08 Aug 2022" iconName="calendar-clock" />
                        <InputsComponent tag="Budget" dValue="15000"  iconName="cash-multiple" />
                    </View>

                        {/* <View style={{  }}>
                            <FlatList style={{ transform : [ { scaleY : 1 } ], }} data={this.state.avatar} horizontal={true} keyExtractor={(item,index) => String(index)} renderItem={({ item,index }) => (
                              <View style={{ transform : [ { scaleX : 0.9 } ],  }}>
                                  <Avatar size={29} rounded source={item.img} />
                              </View>
                            )} />
                        </View> */}
                    <View style={{ paddingVertical: '20%' }}>
                      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',   }}> 
                        <View style={{ paddingLeft: '35%' }}>
                          <ActionButton icon={<Icon name='account-multiple' type='material-community' size={30} color="#fff"  style={{   }}  />} position="right" buttonColor="#000" active={false} radiua={50}>
                            <ActionButton.Item  title="New Task" onPress={() => console.log("notes tapped!")}>
                              <Avatar size={35} rounded source={require('../Assets/Images/img_avatar.png')} />
                            </ActionButton.Item>
                            <ActionButton.Item startDegree={10} title="Notifications" onPress={() => {}}>
                              <Avatar size={35} rounded source={require('../Assets/Images/img_avatar.png')} />
                            </ActionButton.Item>
                            <ActionButton.Item  title="All Tasks" onPress={() => {}}>
                              <Avatar size={35} rounded source={require('../Assets/Images/img_avatar.png')} />
                            </ActionButton.Item>
                            <TouchableOpacity onPress={() => console.log("press")} style={{  }}>
                              <Icon name='plus' type='material-community' size={20} color={Colors.blackColor} reverse style={{ backgroundColor: Colors.whiteColor  }}  />
                            </TouchableOpacity>
                          </ActionButton>
                        </View>
                       
                        <TouchableOpacity style={{  }}>
                          <Icon name='plus-thick' type='material-community' size={30} color="#000" reverse style={{  }}  />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <Pressable onPress={() => this.props.navigation.navigate('BottomMaterial')} style={{ alignItems: 'center', paddingVertical: 20 }}>
                      <Text>CLick to see Material Boottom Nav</Text>
                    </Pressable>

                  </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: 5,
    marginTop: '5%'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

})