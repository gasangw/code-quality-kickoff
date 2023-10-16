/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
const countRepetitionsOfLetterR = (word)=> {
  // create a variable called counter that will represent the number of times letter R repeats it's self.
  let count = 0;
  // loop through the string to get each letter
  for(let letter of word){
    // compare each letter to the target letter and if match found increment the count
    letter == "R" ? count++ : count
  }
  // return count.
  return count;
}

export default countRepetitionsOfLetterR;
