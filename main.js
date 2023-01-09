let wordEntry = document.getElementById('wordEntry');
let wordButton = document.getElementById('wordButton');
let scrambledWordDisplay = document.getElementById('scrambledWordDisplay');

let sentenceEntry = document.getElementById('sentenceEntry');
let sentenceButton = document.getElementById('sentenceButton');
let scrambledSentenceDisplay = document.getElementById('scrambledSentenceDisplay');

wordButton.addEventListener('click',  () => {
  scrambledWordDisplay.innerText = initialWord(wordEntry.value.toLowerCase())
});

sentenceButton.addEventListener('click',  () => {
  scrambledSentenceDisplay.innerText = doSentence(sentenceEntry.value.toLowerCase())
});

function initialWord(words) {
   let anagramedWord = '';
   words = words.split('');    
      while (words.length > 0) {
    anagramedWord += words.splice(words.length * Math.random() << 0, 1);
  }
  return anagramedWord;
}

function doSentence(sentence) {
  let words = sentence.split(' ')
  let anagramedWords = []
  words.forEach(words => {
    anagramedWords.push(initialWord(words))
  })
   return anagramedWords.join(' ')
  }

//simple way (cheat lol) to "clear contents" on a page like this
let resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
 location.reload();
});


/*
resetButton.addEventListener('click', () => {
  wordEntry = '';
  sentenceEntry = '';
 });

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