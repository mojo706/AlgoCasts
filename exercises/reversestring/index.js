// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const reverseStr = str.split('').reverse().join('')
//   return reverseStr
// }

// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

function reverse(str) {
  return str.split('').reduce((reduced, char) => char + reduced, '')
}


module.exports = reverse;
