let firstNumber = prompt("Enter the number N",);
do{
  firstNumber = parseInt(firstNumber,10);
} while(isNaN(firstNumber));
console.log (firstNumber, typeof (firstNumber));

let secondNumber = prompt("Enter the number M",);
do{
  secondNumber = parseInt(secondNumber,10);
} while(isNaN(secondNumber));
console.log (secondNumber, typeof (secondNumber));

let sum = 0;

const skip = confirm("Skip even?");
if (skip === true){
  console.log("Skip even");
  for ( let i = firstNumber ; i<=secondNumber; i++){
    if( i%2 ===0 ){
      continue;
    }sum = sum + i;
  }
  console.log (`Skip even sum: ${sum}`);
  alert(`Skip even sum: ${sum}`)
}else{
  for (let i =firstNumber ; i<=secondNumber; i++){
    sum = sum +i;
  }
  console.log(`Sum of numbers ${sum}`);
  alert(`Sum of numbers: ${sum}`)
}
