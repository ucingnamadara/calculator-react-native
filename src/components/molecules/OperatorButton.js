import { StyleSheet, View } from "react-native";
import Button from "../atomic/Button";

const operatorTexts = ['÷', '×', '-', '+']
const OperatorButton = ({handleTap}) => {
    return(
        <View style={styles.container}>
            {operatorTexts.map(text => (
                <Button style={styles.operatorButton} text={text} onPress={() => {handleTap("operator", text)}}/>
            ))}
            <Button style={styles.equalButton}  text="=" onPress={() => {handleTap("equal", "=")}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        gap:20,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 40
    },
    operatorButton:{
        height:70,
        width:70,
        alignItems:'center',
        justifyContent: 'center'
    }, 
    
    equalButton : {
        height:70,
        width:70,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 40
    }
})

export default OperatorButton;