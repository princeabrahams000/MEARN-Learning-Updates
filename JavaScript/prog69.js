sentence = 'good morning all'

//write a programme to print all vowels in the given sentence (a,e,i,o,u)

vowels = ['a','e','i','o','u','A','E','I','O','U']

character = sentence.split('')
console.log(character);

for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}

//another method 
console.log('-------------------');
Array.from(sentence).filter(char=>vowels.includes(char)).forEach(element=>{console.log(element);});