// // class Plant {
// //     constructor() {
// //       this.water = 0;
// //       this.soil = 0;
// //       this.light = 0;
// //     }
// // }
// //    const hydrate = (plant) => {
// //       return {
// //           ...plant,
// //           water:(plant.water || 0) +1
// //       }
// //     }
  
// //     const feed = (plant) => {
// //         return {
// //           ...plant,
// //           soil: (plant.soil || 0) + 1
// //         }
// //       };
  
//     // giveLight() {
//     //   this.light ++
//     // }

//     // const changePlantState = (plant, property) => {
//     //     return {
//     //       ...plant,
//     //       [property]: (plant[property] || 0) + 1
//     //     }
//     //   }
  

// //  let plant = { soil: 0, light: 0, water: 0 }
// //  changePlantState(plant, "soil")
// // {soil: 1, light: 0, water: 0}






// const changeState = (prop) => {
//     return(value) => {
//         return (state) =>({
//             ...state,
//             [prop]: (state[prop] || 0 ) + value
//         })

//     }
// }










// const storeState = () => {//outer function that is stored in the constant storeState, only job is to store the currentState of object
//     let currentState = {soil:0,light:1,water:0};//initialized empty object, will be mutated everytime inner function is called
//     return (stateChangeFunction) => {//outer function returns an anonymous inner function that takes one parameter called stateChangeFunction. this function will specify the exact change that we should make to currentState
//       const newState = stateChangeFunction(currentState);//assigns change to a new variable
//       currentState = {...newState};// make a copy of newState and assign it to currentState
//       return newState;
//     }
//   }

//   const stateChanger = storeState();
//   const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");


// const blueFood = changeState("soil")(5)
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)




//   const fedPlant = stateChanger(blueFood);
//   const plantFedAgain = stateChanger(greenFood);

//   console.log(plantFedAgain);

//   $(document).ready(function() {

//     // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
//       $('#feed').click(function() {
//         const newState = stateChanger(blueFood);
//         $('#soil-value').text(newState.soil);
//       });
//     });