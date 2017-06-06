\\1.

for(var i="#"; i < "########"; i += "#") {
  console.log(i);
}

\\ OR could as Ali did it:
var hash ="";
for (var i =1;i<8;i++) {
hash += "#";
console.log(hash);
}


//2. Fizzbuz (long way)
for(var i="1"; i < 100; i ++) {
  if(i%3 && i%5 ==0){
      console.log("FizzBuzz");
      } else if(i%3==0){
          console.log("Fizz");
          } else if (i%5==0){
              console.log("Buzz");
              } else {console.log(i)};
};

//2.b Fizz buzz (short way)
for(i=0;i++<100;)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

or slightly longer
i=0;while(++i<101)console.log(i%15?i%3?i%5?i:'buzz':'fizz':'fizzbuzz')

//3.  Chess board
var size=8;
var chessBoard="";
for(var rows = 1; rows <= size; rows++){
  for(var stuff = 1; stuff <= size; stuff++){
    if ((rows+stuff)%2==0){
      chessBoard += " ";
    }
    else{
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}
console.log(chessBoard);
