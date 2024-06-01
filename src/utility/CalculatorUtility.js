export const initialState = {
    currentValue : '0',
    operator : null,
    previousValue : null
}

export const handleNumber = (value, state) => {
    if(state.currentValue === '0'){
        return {currentValue: `${value}`}
    }

    return {
        currentValue: `${state.currentValue}${value}`
    }
}

export const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const currentFloat = parseFloat(currentValue);
  const previousFloat = parseFloat(previousValue);
  const resetState = {
    operator: "=",
    previousValue: null
  };

  if(operator === '÷'){
      return{
        currentValue: previousFloat/currentFloat,
        ...resetState
      }
  }

  if(operator === '×'){
    return{
      currentValue: previousFloat*currentFloat,
      ...resetState
    }
  }

  if(operator === '-'){
    return{
      currentValue: previousFloat-currentFloat,
      ...resetState
    }
  }

  if(operator === '+'){
    return{
      currentValue: previousFloat+currentFloat,
      ...resetState
    }
  }

  return state
}

export const handleUtility = (value,state) => {
  switch(value){
    case "AC":
      return initialState;
    case "+/-":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "%":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
  }
  
}

export const handleOperator = (value, state) => {
  const { currentValue, previousValue } = state;
  const currentFloat = parseFloat(currentValue);
  const previousFloat = parseFloat(previousValue);
  const resetState = {
    operator: value,
    currentValue: "0"
  };

  if(previousValue === null){
    return {
      previousValue: currentValue,
      ...resetState
    }
  }

  if(value === '÷'){
    return{
      previousValue: previousFloat/currentFloat,
      ...resetState
    }
  }

  if(value === '×'){
    return{
      previousValue: previousFloat*currentFloat,
      ...resetState
    }
  }

  if(value === '-'){
    return{
      previousValue: previousFloat-currentFloat,
      ...resetState
    }
  }

  if(value === '+'){
    return{
      previousValue: previousFloat+currentFloat,
      ...resetState
    }
  }

  return state;
}

const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return handleOperator(value,state);
      case "equal":
        return handleEqual(state);
      case "utility":
        return handleUtility(value,state);
      default:
        return state;
    }
  };
  
  export default calculator;