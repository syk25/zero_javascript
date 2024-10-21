// 함수가 3.5초 뒤에 실행되도록 코드 작성하기
function func() {
    console.log("Hello");
}

setTimeout(func, 3500);

// 콘설에서 실행시 예상되는 출력 메세지
const intervalId = setInterval(() => {
    console.log("2초마다 실행됩니다.");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);

// setInterval와 동일하게 작동하는 setTimeout 함수 작성하기
// 재귀함수의 형태임
const log = () => {
    console.log("Hello");
    setTimeout(log, 1000);
};

setTimeout(log, 1000);
