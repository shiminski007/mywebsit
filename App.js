import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from 'exop-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {db} from './firebase';

export default function App() {
  const [shopminders, setShopminders] = useState([]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
