import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/menu.png')} />
        </View>
    )
}

export default Header