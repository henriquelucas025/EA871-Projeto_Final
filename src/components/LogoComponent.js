import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function Logo(){
    return (
    <View style={{margin:50}}>
        <Image resizeMethod='resize'
          source={require('../assets/UNICAMP.png')}
    />
    </View>
    )
}