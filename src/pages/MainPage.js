import React from "react"
import ButtonSection from "../components/organism/ButtonSection"
import calculator, { initialState } from "../utility/CalculatorUtility"
import { View, Image } from "react-native";
import Display from "../components/atomic/Display";
import DisplaySection from "../components/organism/DisplaySection";
import { StyleSheet } from "react-native";

class MainPage extends React.Component{
    state = initialState;

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };

    render(){
        return(
            <View style={styles.container}>
                <DisplaySection 
                    previousValue={this.state.previousValue === null ? '' : parseFloat(this.state.previousValue).toLocaleString()} 
                    currentValue={parseFloat(this.state.currentValue).toLocaleString()} 
                    operator={this.state.operator}
                />
                <ButtonSection handleTap={this.handleTap}/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  });

export default MainPage