import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import imageOff from './assets/icons/eco-light-off.png'
import imageOn from './assets/icons/eco-.png'
import Torch from 'react-native-torch'
import RNshake from 'react-native-shake'

export default function App() {
  const [toggle,setToggle] = useState(false)

  function handletoggle(){
    
    toggle ? setToggle(false): setToggle(true)

  }
  useEffect(()=>{
    Torch.switchState(true)
  },[toggle])
  useEffect(()=>{
    const subscription = RNshake.addListener(()=>{
      handletoggle()
    });
    return ()=> subscription.remove()
  })
  return (
    <View style={toggle ? styles.container : styles.containerLight}>
      <Pressable onPress={handletoggle}>
        <Image  style={styles.lightOn} source={toggle ? imageOff : imageOn} />

      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  lightOn: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  }
});
