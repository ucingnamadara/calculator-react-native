import { StyleSheet, View } from "react-native"
import CurrentDisplay from "../molecules/CurrentDisplay"
import PreviousDisplay from "../molecules/PreviousDisplay"

const DisplaySection = ({currentValue, previousValue, operator}) => {
    return(<View style={styles.container}>
        <PreviousDisplay previousValue={previousValue}/>
        <CurrentDisplay currentValue={currentValue} operator={operator}/>
    </View>)
}


const styles = StyleSheet.create({
    container: {
    }
})

export default DisplaySection