//Задание 2.

//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
 //есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
 
const a = "string";
const b = {
name: "object",
number: 4
};
function check(x,y){
  if(Object.keys(y).includes('name')){
  return true;
  }
};


console.log(check(a,b));
