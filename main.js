//Задание 1

const firstRow = 'мамА мыла раму';
const secondRow = 'собака друг человека';

// решение через ругулярные выражения
function getRowRegExp(firstRow, secondRow) {
  if (((firstRow.match(/а/gi) || []).length) > ((secondRow.match(/а/gi) || []).length)) {
    return firstRow;
  } else if (((firstRow.match(/а/gi) || []).length) < ((secondRow.match(/а/gi) || []).length)) {
    return secondRow;
  } else {
    return 'Колличество букв а в строках одинаково';
  }
}
console.log(getRowRegExp(firstRow, secondRow))

//Решение через цикл

function getRow(firstRow, secondRow) {

  let firstQuantity = 0;
  for(let i = 0; i < firstRow.length; i++){
    if(firstRow[i] === 'а' || firstRow[i] === 'А' ) firstQuantity++;
  }

  let secondQuantity = 0;
  for(let i = 0; i < secondRow.length; i++){
    if(secondRow[i] === 'а' || secondRow[i] === 'А') secondQuantity++;
  }

  if(firstQuantity > secondQuantity) {
    return firstRow;
  } else if (firstQuantity < secondQuantity){
    return secondRow;
  }else {
    return 'Колличество букв а в строках одинаково';
  }
}

console.log(getRow(firstRow, secondRow));

//Задание 2
//
function formattedPhone(phone) {
  let formattedStr = '';
  for(let i = 0; i < phone.length; i++){
    if(i === 2){
      formattedStr += ' ('
    }
    if(i === 5){
      formattedStr += ') '
    }
    if(i === 8){
      formattedStr += '-';
    }
    if(i === 10){
      formattedStr += '-';
    }
    formattedStr += phone[i];
  }
  return formattedStr;
}

console.log(formattedPhone('+71234567890'));
