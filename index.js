"use strict"
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
console.log(menu);
console.log("Function Declaretion");
function double(menu) {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
           menu[key] *= 2;
        }
    }
    return menu;
}
console.log(double(menu));


// console.log("Function Expression");
// const double = function (menu) {
//     for (let key in menu) {
//     if (typeof menu[key] === "number") {
//         menu[key] *= 2;
//      }
//  }
//  return menu;
// }
// console.log(double(menu));


// console.log("Arrow Function");
// const double = (menu) => {
//     for (let key in menu) {
//         if (typeof menu[key] === "number") {
//             menu[key] *= 2;
//          }
//      }
//      return menu;
//   }
// console.log(double(menu));

