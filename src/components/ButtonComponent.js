import React from "react";
import { Button, View, Alert } from "react-native";


export default function ButtonComponent (){
    return (
        <View>
        <Button onPress={() => Alert.alert('Simple Button pressed')} title="Calculadora" color="#841584" accessibilityLabel="Transição de Estado" />
        <Button onPress={() => Alert.alert('Simple Button pressed')} title="Cronômetro" color="#841584" accessibilityLabel="Transição de Estado" />
        <Button onPress={() => Alert.alert('Simple Button pressed')} title="Termometro" color="#841584" accessibilityLabel="Transição de Estado" />
        <Button onPress={() => Alert.alert('Simple Button pressed')} title="LED" color="#841584" accessibilityLabel="Transição de Estado" />
        <Button onPress={() => Alert.alert('Simple Button pressed')} title="Reset" color="#841584" accessibilityLabel="Transição de Estado" />
        </View>
    )
}