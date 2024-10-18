// 특정 조건을 충족하는 요소 찾기

//find(): 콜백함수의 반환값이 true를 만족하는 요소를 찾는 메서드
// 요소가 여러개 일 때 처음 찾은 요소를 반환
const array = [1, 3, 5, 7];
const func = array.find((v, i) => {
    return v > 1;
});

console.log(func);

const nested = [{ age: 29 }, { age: 5 }, { age: 3 }];
let result = nested.includes({ age: 29 }); // false -> 객체 간의 비교는 false다
console.log(result);
result = nested.find((v, i) => {
    return v.age === 29;
});

console.log(result);

// findIndex()
result = array.findIndex((v, i) => {
    return v > 3;
});

console.log(result);

result = [1, 2, 3, 4, 5].filter((v) => v % 2 == 0);
console.log(result);

