import React from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "../CustomButton";
import Header from "../Header";
import styles from "./styles";

const CarContainer = (props) => {

    const { name, image, priceinfo } = props.car

    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.imageBackground}  source={image} />
            <View style={styles.carInfoContainer}>
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.carPriceInfo}>{priceinfo}</Text>
            </View>

            <View style={styles.button}>
                <CustomButton type='primary' onPress={() => {
                    console.warn('Custom Order Button was pressed')
                }}/>
                <CustomButton type='secondary' onPress={() => {
                    console.warn('Existing Inventories Button was pressed')
                }}/>
            </View>
        </View> 
    )
}

export default CarContainer