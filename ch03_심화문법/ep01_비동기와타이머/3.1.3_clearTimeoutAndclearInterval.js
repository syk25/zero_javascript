// 타이머정리함수
// 타이머가 실행되기 전에 취소하는 함수. 타이머가 실행되면 취소 할 수 없다.
const timerId = setTimeout(() => {
    console.log("0초 뒤에 실행됩니다.");
}, 0);
console.log("내가 먼저");
clearTimeout(timerId);


