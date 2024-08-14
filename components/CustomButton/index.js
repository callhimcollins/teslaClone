import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles'

const CustomButton = (props) => {

    const {type, onPress} = props

    const backgroundColor = type === 'primary' ? 'black': 'white'
    const textColor = type === 'primary' ? 'white' : 'black';
    const button = type === 'primary' ? 'Custom Button' : 'Existing Inventory'
    
    return (
        <View style={styles.container}>
            
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{button}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButton