import { SafeAreaView, Text, View } from "react-native";

const Display = ({value, style, textStyle}) => {
    return(
        <View style={style}>
            <Text style={textStyle}>{value}</Text>
        </View>
    );
}

export default Display