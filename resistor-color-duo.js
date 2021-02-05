//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


//

// export const colorCode = (colour1, colour2) => {
//   //create new variable for an array: assign the index of the colours to in order
//   //add index to array using .push()
//   //string together elements in an array
//   //return a single number made up of the elements in array
//   console.log(COLORS.indexOf(name))
//   return COLORS.indexOf(name)
// };

export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]


export const decodedValue = (colour1, colour2) => {
  let colour1_index = String(COLORS.indexOf(colour1))
  let colour2_index = String(COLORS.indexOf(colour2))
  //return Number(colour1_index + colour2_index)
  return Number(colour1_index.concat(colour2_index))

};

decodedValue("brown", "black")
