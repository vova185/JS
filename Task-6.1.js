let word = prompt('Введите слово');
let upturnedWord = '';
for (let i = word.length - 1; i >= 0; i -= 1) {        
         upturnedWord += word[i];    
        };
answer = upturnedWord.toLowerCase() === word.toLowerCase() ? `Слово ${word} является палиндромом` : `Слово ${word} не является палиндромом`;
console.log(answer); 
