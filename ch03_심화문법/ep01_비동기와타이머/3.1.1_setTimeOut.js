// 지정한 시간 뒤에 콜백함수를 실행
// 비동기함수
setTimeout(() => {
    console.log("2초 후에 실행됩니다.");
}, 5000);

// 비동기함수인 이유: 이후에 작성 된 코드가 먼저 실행 됨 -> 작성 순서와 다른 순서로 실행되는 상황

console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);

// 다음과 같은 케이스의 경우에도 작성 순서대로 실행되지 않음
setTimeout(() => {
    console.log(3);
}, 5000);
setTimeout(() => {
    console.log(1);
}, 2000);
setTimeout(() => {
    console.log(2);
}, 3000);
