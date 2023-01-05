


//const string = document.querySelector('#wordEntry').value;
//const longerString = document.getElementById('sentenceEntry').value;

let words = document.getElementById('#wordEntry');
let sentence = document.getElementById('#sentenceEntry');

wordButton.addEventListener("click", initialWord(words));

function initialWord(words) {
   let anagramedWord = '';
   words = words.split('');    
      while (words.length > 0) {
    anagramedWord += words.splice(words.length * Math.random() << 0, 1);
  }
  return anagramedWord;
  
}




//console.log(initialWord(string));


sentenceButton.addEventListener("click", doSentence(sentence));

function doSentence(sentence) {
  let words = sentence.split(' ')
  let anagramedWords = []
  words.forEach(words => {
    anagramedWords.push(initialWord(words))
  })
   return anagramedWords.join(' ')

   }


//console.log(sentence);  
//console.log(doSentence(sentence));



/* COPY OF WORKING CODE JUST IN CASE - DO NOT ALTER!

const string = prompt('enter a word');
const longerString = prompt('enter a complete sentence');


let words = string;
let sentence = longerString;

console.log(words);


function initialWord(words) {
  let anagramedWord = '';
   words = words.split('');    
      while (words.length > 0) {
    anagramedWord += words.splice(words.length * Math.random() << 0, 1);
  }
  return anagramedWord;
}

console.log(initialWord(words));


function doSentence(sentence) {
  let words = sentence.split(' ')
  let anagramedWords = []
  words.forEach(words => {
    anagramedWords.push(initialWord(words))
  })
   return anagramedWords.join(' ')
}
console.log(sentence);   
console.log(doSentence(sentence));
*/
