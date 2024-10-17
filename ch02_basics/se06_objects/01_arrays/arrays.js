// 배열 생성하기
const fruits = ["사과", "오렌지", "배", "딸기"]; // 배열 리터럴

// 인덱싱
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 배열 안의 값들의 자료형은 동일할 필요가 없음
const arrayOfArray = [
    [1, 2, 3],
    [4, 5],
];

// 배열 안에 변수도 넣을 수 있음
const a = 10;
const b = 20;

const variableArray = [a, b, 30];

// 요소: 배열의 값들
const everything = ["사과", 1, undefined, true, "배열", null];
const x = everything.length; // 배열의 길이
console.log(`배열 everything의 원소의 개수: ${x}`);

/* 배열의 요소 개수 구하기 */
// REVIEW: 배열의 요소를 통해 원하는 인덱스의 요소를 찾을 수 있다
const findLastElement = ["a", "b", "c", "d", "e"];
console.log(findLastElement[findLastElement.length - 1]); // 인덱싱
// REVIEW: at함수는 인덱스를 인자로 받는다. 음수의 경우, 마지막 요소부터 센다.
console.log(findLastElement.at(4)); // at() 함수
console.log(findLastElement.at(-1)); // at() 함수

/* TODO: 배열에 요소 추가하기 */
const target = ["a", "b", "c", "d", "e"];
target[5] = "f"; // 인덱싱을 통해 원소를 추가할 수 있다
console.log(target);
// 배열의 맨 앞에 원소를 추가하려는 경우
target.unshift(0);
console.log(target);
// 배열의 맨 뒤에 원소를 추가하려는 경우
target.push("last");
console.log(target);

/* TODO: 배열의 요소 수정하기 */
const target2 = ["가", "나", "다", "라", "마"];
target2[3] = "카";
console.log(target2);

console.log("=====================");

/* 배열에서 요소 삭제하기 */
const target3 = ["가", "나", "다", "라", "마", "바", "사"];
// 마지막 원소 삭제
target3.pop();
console.log(target3);

// 첫번째 요소 삭제
target3.shift();
console.log(target3);

// 중간요소 삭제
target3.splice(2, 2); // 2번 인덱스 원소를 시작으로 2개 삭제
console.log(target3);

target3.splice(1);
console.log(target3);

target3.splice(0, 1, "타", "파");
console.log(target3);

target3.splice(1, 0, "원소추가");
console.log(target3);

console.log("========= 배열에서 요소 찾기 ===============");

/* REVIEW: 배열에서 요소 존재여부 확인하기 */
const target5 = ["가", "나", "다", "라", "마", "바", "사"];
const result = target5.includes("다");
console.log(result); // true

const result2 = target5.includes("자"); // NOTE: 자료형까지 일칠해야함
console.log(result2); // false

/* REVIEW: 요소의 인덱스 확인하기 */
const target6 = ["가", "나", "다", "라", "마", "바", "사"];
const result3 = target6.indexOf("다"); //NOTE: 자료형까지 일치해야함
console.log(result3); // 2

console.log("====== 배열 자르고 합치기 ======");

const sliced = [1, 2, 3, 4, 5].slice(1); // 1번째부터 끝까지
const sliced2 = [1, 2, 3, 4, 5].slice(1, -1); // 마지막 원소 제거
console.log(sliced);
console.log(sliced2);

const concatted = sliced.concat(sliced2);
console.log(concatted);

/* REVIEW: 배열을 문자열로 만들기 */
const stringed = ["a", "b", "c"].join(); // ,로 붙임
const stringed2 = ["a", "b", "c"].join("x"); // x로 붙임
const stringed3 = ["a", "b", "c"].join(""); // 바로 붙임
console.log(stringed);
console.log(stringed2);
console.log(stringed3);

console.log("=====================");
const arr = ["ㄱㅏ", "라", "다", "라", "마", "라"];

while (arr.includes("라")) {
    arr.splice(arr.indexOf("라"), 1);
}
console.log(arr);

