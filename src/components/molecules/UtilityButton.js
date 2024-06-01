import { StyleSheet, View } from "react-native";
import Button from "../atomic/Button";

const utilityTexts = ['AC', '+/-', '%']
const UtilityButton = ({handleTap}) => {
    return(
        <View style={styles.container}>
            {utilityTexts.map(text => (
                <Button style={styles.utilityButton} text={text} onPress={() => handleTap("utility", text)}/>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap:20,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 40
    },
    utilityButton:{
        height:70,
        width:70,
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default UtilityButton;