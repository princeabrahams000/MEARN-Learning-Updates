text = 'hai hello all hello world all'
// write the programme to print the word count from the given string
// output = {hai:1, hello:2, all:2, world:1}

// algoritham

// 1) convert the text into array of words 
// 2) create a new empty object
// 3) fetch each words from the array
// 4) check each word is present in the created object
// 5) if present increment the count
// 6) else add a new key:value to object 


// 1) convert the text into array of words 
words = text.split(' ')
console.log(words);
// 2) create a new empty object
obj = {}
// 3) fetch each words from the array
for(word of words){
// 4) check each word is present in the created object
    if(word in obj){
// 5) if present increment the count
        obj[word]+=1
    }
    else{
        // 6) else add a new key:value to object 
        obj[word]=1
    }
}
//7) display the object
console.log(obj);



console.log('---------------or using array method---------------');

wc = {}
text.split(' ').forEach(item => item in wc?wc[item]+=1:wc[item]=1);
console.log(wc);
