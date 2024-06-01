import { Image, ImageBackground, StyleSheet, View } from "react-native";
import NumericButton from "../molecules/NumericButton"
import OperatorButton from "../molecules/OperatorButton";
import UtilityButton from "../molecules/UtilityButton";
import { LinearGradient,CanvasGradient } from "expo-linear-gradient";

const ButtonSection = ({handleTap}) =>{
    return(
        <LinearGradient style={styles.container} colors={['#9EE8FF','#5ACEFF', '#79AFFF','#2D5FDE']} start={{
            x: 0,
            y: 0
          }}
          end={{
            x: 1,
            y: 1
          }}>
            <View style={styles.bottom}>
                <UtilityButton handleTap={handleTap}/>
                <NumericButton handleTap={handleTap}/>         
            </View>
            <OperatorButton handleTap={handleTap}/>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        gap:20,
        justifyContent: 'center',
        alignItems : 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: '100%',
        height: 537
    },
    bottom: {
        flexDirection:'column',
        gap:20
    }
})

export default ButtonSection;