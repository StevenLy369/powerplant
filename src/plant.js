
export const storeState = () => {
  //outer function that is stored in the constant storeState, only job is to store the currentState of object
  let currentState = { soil: 1, light: 0, water: 0, name: " " }; //initialized empty object, will be mutated everytime inner function is called
  return (stateChangeFunction) => {
    //outer function returns an anonymous inner function that takes one parameter called stateChangeFunction. this function will specify the exact change that we should make to currentState
    const newState = stateChangeFunction(currentState); //assigns change to a new variable
    currentState = { ...newState }; // make a copy of newState and assign it to currentState
    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
     

    });
  };
};
export const stateChanger = storeState();