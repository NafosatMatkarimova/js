//variables


// var test = "hello world";
// var a = 10;
// var b = 15;

// let ball = prompt("Ball");

// console.log(test);
// console.log(a+b);

// confirm("are u surer exit this page");
// prompt("yoshingizni kiriting");
// alert("congratulations! you filled this form saccessfully!")



// if (ball > 56 && ball < 72){
//     alert( "3");
// } else if (ball > 71 && ball < 86){
//     alert("4");
// } else if (ball >= 85 && ball < 100){
//     alert("5");
// } else {
//     alert("2");
// }

let weight = prompt ("weight");
let height = prompt ("height");

if(weight /height < 18.5 ){
    alert ("under weight");

} else if (weight /height > 18.5 && weight /height < 24.9){
    alert ("normal");

} else if (weight /height > 25 && weight /height < 29.9){
    alert("over weight");

} else if (weight /height > 30 && weight /height < 34.9){
    alert("obesity(class 1)");

} else if (weight /height > 35 && weight /height < 39.9){
    alert("obesity(class 2)");

} else if (weight /height > 40){
    alert("extreme obesity");
}