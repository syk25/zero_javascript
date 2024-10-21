// 클로저: 외부 값에 접근하는 함수
// 모든 자바스크립트 함수는 클로저가 될 수 있다

const a = 1;
const func = () => {
    console.log(a);
};

func(); // 클로저

const func2 = (msg) => {
    // 반환값이 함수인 형태 - 익명함수는 클로저로 작동
    return () => {
        console.log(msg); // 함수 외부의 변수를 가져옴
    };
};

const message = func2("Hello Closure");
message();

/* 
정적스코프
함수가 선언된 위치에 따라 접근할 수 있는 값이 달라질 수 있는 현상

동적스코프
함수가 호출된 위치에 따라 접근할 수 있는 값이 달라질 수 있는 현상

자바스크립트는 정적 스코프
*/