//Задание 1.

//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
 //только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
  planet : "Earth",
  size : 10
};


function functionObject(a) {
  functionObject.planet = "Mars";
  functionObject.size = 20;
  for (let entrie of Object.entries(functionObject)) {
    console.log(entrie);  
}
  for(let entrie of Object.entries(a)) {
    console.log(entrie);
  }
};


functionObject(obj);
