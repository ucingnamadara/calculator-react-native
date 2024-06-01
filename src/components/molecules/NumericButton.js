import { View } from "react-native-web";
import Button from "../atomic/Button";
import { StyleSheet } from "react-native";

const numericTexts = [['7', '4', '1', "."], ['8', '5', '2', '0'], ['9', '6', '3', '00']];

const NumericButton = ({handleTap}) => {
    return (<View style={styles.numericIndex}>
        {numericTexts.map(index => (
            <View style={styles.numericText}>
                {index.map(text => (
                    <Button text={text} style={styles.numericButton} onPress={() => handleTap("number", text)}/>
                ))}
            </View>
        ))}
    </View>);
}

const styles = StyleSheet.create({
    numericIndex: {
        flexDirection:'row',
        gap:20
    },
    numericText: {
        gap:20,
        justifyContent:'center',
        alignItems:'center'
    },
    numericButton:{
        height:70,
        width:70,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 40
    }
  });

export default NumericButton;