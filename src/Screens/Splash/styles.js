import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2C61C7'
    },
    subcontainer: {
        height: '70.8%',
        width: '150%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 544,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '14.1%',
    },
    logo: {
        height: 225,
        width: 204.957,
    },
    blueContainer: {
        backgroundColor: '#2C61C7',
        width: '100%',
        height: '50%',
        zIndex: -1,
      },
      redContainer: {
        backgroundColor: 'red',
        width: '100%',
        height: '50%',
        zIndex: -1,
      },
});

export default styles

