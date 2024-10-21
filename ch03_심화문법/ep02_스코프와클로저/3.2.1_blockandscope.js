/* NOTE
var: 함수 스코프 -> 선언 된 함수범위 내에서 영향을 미침(블럭과 무관)
let: 블록 스코프 -> 선언 된 블럭범위 내에서 영향을 미침
 */

// var: 함수 스코프
function b() {
    var a = 1;
}

// console.log(a);

// let: 블록 스코프
if (true) {
    var a = 1;
}
console.log(a);

if (true) {
    let c = 1;
}
// console.log(c);

for (var i = 0; i < 5; i++) {}
console.log(i);

for (let j = 0; j < 7; j++) {}
// console.log(j);
