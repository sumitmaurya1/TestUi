import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';
import React, { Component } from 'react';
import Colors from '../Assets/Colors';
import Discover from '../Screens/Discover';
import Home from '../Screens/Home';
import Husti from '../Screens/Husti';
import Notification from '../Screens/Notification';
import Test from '../Screens/Test';
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";

// import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import { Text, View } from 'react-native';


const Stack = createStackNavigator();
const Bottom = createMaterialBottomTabNavigator();

const tabs = [
    {
      name: 'Home',
      activeIcon: <Icon name="home-outline" color="#E88B1D" type='ionicon' size={25} />,
      inactiveIcon: <Icon name="home-outline" color="#B4B1B1" type='ionicon' size={25} />,
      
    },
    {
      name: 'Chat',
      activeIcon: <Icon name="chatbox-outline" type='ionicon' color="#E88B1D" size={25} />,
      inactiveIcon: <Icon name="chatbox-outline" type='ionicon' color="#B4B1B1" size={25} />
    
    },
    {
      name: 'Husti',
      activeIcon: <Icon name="add-outline" type='ionicon' color="#E88B1D" size={25} />,
      inactiveIcon: <Icon name="add-outline" type='ionicon' color="#B4B1B1" size={25} />
    },
    {
      name: 'Discover',
      activeIcon: <Icon name="filter-outline" type='ionicon' color="#E88B1D" size={25} />,
      inactiveIcon: <Icon name="filter-outline" type='ionicon' color="#B4B1B1" size={25} />
    },
    {
      name: 'Notification',
      activeIcon: <Icon name="notifications-outline" type='ionicon' color="#E88B1D" size={25} />,
      inactiveIcon: <Icon name="notifications-outline" type='ionicon' color="#B4B1B1" size={25} />
    },
  
  ];

  const MTab = () => {
    return(
        <Tabbar
            tabs={tabs}
            tabBarContainerBackground='#444241'
            tabBarBackground='#000'
            activeTabBackground='#444241'
            labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
            onTabChange={(item) => handleChange(item.name)}
        />
    )
  }

  const handleChange = (item) => {
    switch (item) {
        case 'Home':
           <Home />
           break;
        case 'list':
            <Test />
            break;
       
    }
  }

const BottomNav = () => {
    return(
        <Bottom.Navigator initialRouteName="Home" backBehavior='firstRoute' activeColor='#E88B1D' barStyle={{ backgroundColor: '#444241', paddingHorizontal: 5, }}>
            <Bottom.Screen name="Home" component={Home} options={{
                tabBarIcon:({ color }) => (
                    <Icon name='home-outline' type='ionicon' size={20} color={color} />
                ),}} />
            <Bottom.Screen name="Test" component={Test} options={{
                tabBarIcon:({ color }) => (
                    <Icon name='chatbox-outline' type='ionicon' size={25} color={color} />
                ),}} />
            <Bottom.Screen name="Husti" component={Husti} options={{
                tabBarIcon:({ color }) => (
                    <Icon name='add-outline' type='ionicon' size={20} color={color} />
                ),}} />
            <Bottom.Screen name="Discover" component={Discover} options={{
                tabBarIcon:({ color }) => (
                    <Icon name='filter-outline' type='ionicon' size={20} color={color} />
                ),}} />
            <Bottom.Screen name="Notification" component={Notification} options={{
                tabBarIcon:({ color }) => (
                    <Icon name='notifications-outline' type='ionicon' size={20} color={color} />
                ),}} />
        </Bottom.Navigator>
    )
}



export default class Route extends Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerMode: false }}>
                <Stack.Screen name='BottomNav' component={BottomNav} />
                <Stack.Screen name='BottomMaterial' component={MTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}
