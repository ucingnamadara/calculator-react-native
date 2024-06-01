import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({onPress, text, style}) => {
    return(
    <TouchableOpacity onPress={onPress} style={style}> 
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    text : {
        fontSize : 26
    }
});

export default Button;