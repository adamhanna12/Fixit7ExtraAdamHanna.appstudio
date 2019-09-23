let sentence = prompt("Enter a sentence of at least 5 words.") 
let firstChar = sentence.charAt(0)
let secondChar = sentence.charAt(1)

if (firstChar === 'b') {
  console.log(sentence)
} else if (secondChar === 't') {
  console.log(sentence.slice(1))
} else {
  console.log(sentence.slice(2))
} 




