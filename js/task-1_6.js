// // let userInput;
// let total = 0;

// do {
//     userInput = prompt('Введите число');

//     if(userInput === null) {
//         alert(`Общая сумма чисел равна ${total}`);
//         break;
//     }

//     userInput = Number(userInput);
//     console.log(userInput);
// } while (true){
//     total += userInput;

// }

// console.log(`Щбщая сумма ${total}`);

let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введно не число, пропускаем текущую итерацию!');
    continue;
  }

  total += input;
}

console.log(`Общая сумма ${total}`);
