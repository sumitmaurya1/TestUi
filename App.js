/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from './Src/Route/Route';
import Husti from './Src/Screens/Husti';
import { Header, Icon } from "@rneui/themed";



const App = ()  => {


  return (
      <View style={{ flex: 1 }}>
        <Route />
      </View>
  );

  }

export default App;
