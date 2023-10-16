/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  // if the password is null return 0;
  if(password === null) return 0;
  if (typeof password !== "string") password = String(password);
  // Here am  doing backreference: Referring to a captured group's content in the regex pattern.
    let regex = (/([a-z0-9])\1+/gi)
    let count = 0;
    // check if the password matches the regex then return an array of matching items else return 0
   let matchArr = (password.match(regex) || 0)
   if(matchArr === 0) return 0;
   // if there are matches found loop through the array of matches and if each match has
   // a length of two increment the count by 1 and if its length is more or equal to 3 
   // increment count by 2.
   for(let cha of matchArr){
      if(cha.length === 2) count+=1
      if(cha.length >= 3) count+=2
   }
   return count
}
