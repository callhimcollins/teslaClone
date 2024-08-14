import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({ 
    imageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'contain'
      },
      mainContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      carInfoContainer: {
        marginTop: 100,
        alignItems: 'center'
      },
      name: {
        fontWeight: '600',
        fontSize: 30,
      },
      carPriceInfo: {
        color: 'grey'
      },
      button: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
      }
 })

export default styles