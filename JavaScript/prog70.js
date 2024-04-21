str = 'hello'

console.log(str[4]);

// write a programme to check whether the given string is palindrom or not?

str = 'malayalam'

start = 0
end = str.length-1
ispalindrome = true
while(start<end){
    if(str[start] != str[end]){<p></p>
        ispalindrome=false
    }
    start++
    end--
}
console.log(ispalindrome?'palindrom':'not palindrome');

//another method -using for 

for(i=str.length-1;i>=0;i--){
    pal += str[i]
}
console.log(str==pal?'palindrome':'not palindrome');