//Задание 3.

//Написать функцию, которая создает пустой объект, но без прототипа.


function newobj(){
let a = {
   name: "object",
   nuber: 4
};
};

newobj();
console.log(a);

console.log(Object.getPrototypeOf(a));
