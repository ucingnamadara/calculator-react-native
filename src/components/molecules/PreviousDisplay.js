import { StyleSheet, View } from "react-native"
import Display from "../atomic/Display"

const PreviousDisplay = ({previousValue}) => {
    return(
            <Display value={previousValue} style={styles.previousText} textStyle={styles.textStyle}/>
        
    )
}

const styles = StyleSheet.create({
    container : {
        width: 355,
        height: 35
    },
    previousText : {
        height:70,
        width:355,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        paddingRight:30
    },
    textStyle : {
        fontSize: 22,
        color:'rgba(55, 55, 55, 0.50)'
    }

})
export default PreviousDisplay