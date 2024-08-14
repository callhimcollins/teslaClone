import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        marginTop: 30,
        elevation: 100,
        padding: 10,
        width: "100%",
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    logo: {
        width: 100,
        height: 25,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25
    }
})

export default styles