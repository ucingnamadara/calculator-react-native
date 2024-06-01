import { StyleSheet, Text, View } from "react-native"
import Display from "../atomic/Display"

const CurrentDisplay = ({currentValue, operator}) =>{
    const equals = "=";

    return(
    <View style={styles.container}>
        <Display style={styles.equals} value={operator} textStyle={styles.textStyle} />
        <Display style={styles.current} value={currentValue} textStyle={styles.textStyle}/>
    </View>)
}

const styles = StyleSheet.create({
    container : {
        flexDirection:"row",
        justifyContent:"center",
        gap:10,
        alignContent: 'center'
    },
    equals : {
        height:70,
        width:70,
        alignItems:'center',
        justifyContent: 'center'
    },
    current : {
        height:70,
        width:260,
        alignItems:'flex-end',
        justifyContent: 'center',
        paddingRight:30
    },
    textStyle : {
        fontSize: 40
    }
})

export default CurrentDisplay