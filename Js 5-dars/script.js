// 5-dars 

// var num = +prompt("Daraxtda nechta quw bor")
// var str = "Daraxtda " + num + " qush"
// var end = ""
// switch(num % 10){
//     case 1 :
//         end = "cha"
//         break
//     case 2 :
//     case 3 :
//     case 4 :
//     case 5 :
//     case 6 :
//     case 7 :
//     case 8 :
//     case 9 :
//         end = "lar"
//         break
// }
// var std = str + end
// alert(std)

// var num = "Salom "
// console.log(num);

// function say (a, b) {
//         let nam = "Salom";
//         return nam
//         // nam = "shohrux"
//         // return nam
//         // name = "Shohrux"
//         // surname = "Meliboyev"
//         // return name + surname
//         // document.write(name + surname)

// }
// console.log(say(5, 6));
// document.write(say(5, 6));
// alert(say(5, 6))

// say(nam)
// var x = say(nam)
// document.write(x);

// console.log(name);
// var name = "aadsasdd"


// function sam () {
//     let nam = "Shohrux"
//     return nam
// }

// var x = sam(nam)
// document.write(nam);




// function sam (name, surname) {
//     document.write(name + " " + surname)
//     const nam = "Meliboyev"
//     return nam 
// }

// var y = sam("salom", "Shaxa") 
// let s = y
// alert(y)
// console.log(s);


// var num = +prompt("Sonni yozing")
// var power = +prompt("Darajasini yozing")

// function sayhi (num, power){
//     var res = 1;
//     for(var i = 1; i <= power; i++){
//         res *= num
//     }
//     return res
// }

// alert(sayhi(num, power))
// var x = sayhi()
// console.log(x);


// var num = +prompt("Sonni yozing")
// var power = +prompt("Darajasini yozing")
// let res = 1;
// for(var i = 1; i <= power; i++){
//     res *= num
// }
// document.write(res)

// var lines = +prompt("Sonni yozing")
// var line = ""

// for(var i = 1; i <= lines; i++){
//     line += "*"
//     document.write(line + "<br>")
// }


// function print (num, hhh){
//     var msg = prompt("yozish kerak")
//     var count = prompt("qancha chiqarish kerak " + msg + "ni")
//     if(count == null){
//         count = 3
//     }
//     for(var i = 0; i < count; i++){
//         document.write( "<p>" + msg  + "<hr>")
//     }
//     // return msg
// }
// print()


// var num1 = +prompt("birinchi sonni yozing");
// var op = prompt("Arifmetik amalni tanlang")
// var num2 = +prompt("ikkinchi sonni yozing")
// var res;

// function sum (a, b){
//     return a + b
// } 
// function sam (a, b){
//     return a - b
// } 
// function sub (a, b){
//     return a * b
// } 
// function sab (a, b){
//     return a / b
// }
// switch(op){
//     case "+" :
//         res = sum(num1, num2);
//         break;
//     case "-" :
//         res = sam(num1, num2);
//         break;
//     case "*" :
//         res = sub(num1, num2);
//         break;
//     case "/" :
//         res = sab(num1, num2);
//         break;
//         default :
//         document.write("<p>" + op + "operator emas")
// }

// if(res !== undefined){
//     document.write("<p>" + num1 + "  "  + op + " " + num2 + " = " + res)
// }


// PARSEINT LENGTH TOLOWERCASE TOUPPERCASE RANDOM
// Math.random()
// Math.floor(3.1) = 3
// Math.ceil(3.1) = 4
// Math.round(3.5) = 4
// Math.max(1, 2, 3, 4, 5) = 5
// Math.min(1, 2, 3, 4, 5) = 1


function random (min, max){
    var rand = Math.floor(min + Math.random() * (max - min +1))
    return rand
}

document.write(random(1, 10))