const number = [1, 3, 5, 7];
for (var i = 0; i < number.length; i++) {
    setTimeout(() => {
        // 익명함수는 외부변수 i에 접근 중인 클로저 함수
        console.log(number[i]); // undefined...
    }, 1000 * (i + 1)); // setTimeout 함수와 콜백함수의 실행시점이 다르다
}
/* 정리
setTimeout 함수는 인자로 콜백함수와 시간을 받음
콜백함수는 클로저임
setTimeout 함수와 콜백함수의 실행시점이 다르다
    - setTimeout함수는 반복문을 따라 실행
    - 콜백함수는 setTimeout의 시간인자에 따라 그 시간이 지난 후에 실행 됨 -> i는 이미 변했음

 */

// 외부변수가 let인 경우: 블럭 스코프 -> 반복문을 돌 때마다 새로운 블럭 생성 -> i 값이 고정됨
for (let i = 0; i < number.length; i++) {
    setTimeout(() => {
        console.log(number[i]);
    }, 1000 * (i + 1));
}

// NOTE: 결론 - var 쓰지말고 맘 편하게 let 쓰자.
// var는 함수 스코프, let은 블럭 스코프
