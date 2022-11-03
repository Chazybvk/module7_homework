//Задание 5
//Переписать консольное приложение из предыдущего юнита на классы.

class Device {
constructor (devicePower, deviceColor, status){
this.power = devicePower;
this.color = deviceColor;
this.status = status;
}

getStatus(finalStatus){
  this.status = finalStatus;
};
}

const lamp = new Device(10, "white", 0);
const computer = new Device(30, "black",0);

let lampStatus = prompt("Включить лампу - 1, Оставить выключенной - 0");
let computerStatus = prompt("Включить компьютер - 1, Оставить выключенным - 0");


lamp.getStatus(+lampStatus);
computer.getStatus(+computerStatus);

console.log(lamp);
console.log(computer);

//Подсчет потребяемой энергии

function getSumDevicesPower(x,y){
  let a = x.power;
  let b = y.power;
  
  if (x.status == 0){
  a = 0;
  }
  
  if (y.status == 0){
  b = 0;
  }
  console.log("⚡Общая потребяемая энергия - "+(a+b));
}

getSumDevicesPower(lamp, computer);