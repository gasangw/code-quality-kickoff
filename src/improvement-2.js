/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
const onlyGetFoods = (items)=> {
  // create an array to hold all foods
  const ARRAY_OF_FOODS = [];
  // loop through an array of items to access each property of 
  for(let food of items){
    // check the type property on each object if its equal to Food and if so push to the new array that we created
    // else if not just return the original array.
    food.type === "Food" ? ARRAY_OF_FOODS.push(food) : ARRAY_OF_FOODS
  }
  // return the array we created.
  return ARRAY_OF_FOODS;
}

export default onlyGetFoods
