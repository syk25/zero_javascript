// 구조분해 할당: 객체의 속성들을 여러개의 변수에 한번에 할당할 수 있다.
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a);

// 배열의 구조분해 할당
const array = [1, 2, 5];
const { one, two, five } = array;

// 구조분해 할당을 활용한 값의 교체
let c = 5;
let d = 3;
[d, c] = [c, d];
console.log(c, d); // 3, 5

const obj2 = {
    a: "hello",
    b: {
        c: "hi",
        d: { e: "wow" },
    },
};
