import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './src/components/ButtonComponent';


export default function App() {
  return (
    <View style={styles.introduct}>
      <StatusBar styles ="light" />
      <Text style={styles.title}>Projeto Final - EA871</Text>
      <ButtonComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  introduct: {
    flex: 1,
    backgroundColor: "#00BFFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff'
  }

});
