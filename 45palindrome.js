1221
123321
1234521

var palindrome = (data) => {
    var rem,temp,final =0
    temp=data;
    while(data>0){
        rem=data%10;
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp) {
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1324)
VM137:12 Number 1324 is not a palindrome
undefined
palindrome(1221)
VM137:10 Number 1221 is palindrome