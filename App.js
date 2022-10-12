import React ,{useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
 
  return (

    <StackNavigation>
     <StatusBar backgroundColor='#FED500'>
 </StatusBar>
  </StackNavigation>
 

  );
}

const styles = StyleSheet.create({
 
});
