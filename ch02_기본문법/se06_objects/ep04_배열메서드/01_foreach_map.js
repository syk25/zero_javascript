// forEach() 메서드: 배열에서 요소들에 대해 반복문의 역할 수행
// 인수로 함수를 받음
// 인수로 받은 함수를 요소의 각각에 적용함
// 콜백함수: 다른 메서드에 인수로 넣었을 때 실행되는 함수
// forEach에서 콜백함수의 매개변수: number, index - 값과 인덱스로 이름은 바꿔서 사용 가능
const arr = [1, 2, 4, 5];
arr.forEach((number, index) => {
    console.log(number, index);
});

// map() 메서드: 인수로 들어온 콜백함수를 배열의 요소 각각에 적용
const numbers = Array(5)
    .fill(1)
    .map((v, i) => i + 1);
console.log(numbers);

const array = [1, 3, 5, 7];
const newArray = array.map((v, i) => {
    return v * 2;
});
console.log(array);
console.log(newArray);

for (let i = 0; i < array.length; i++) {
    console.log(array[i], i);
}

const sol = Array(5)
    .fill(1)
    .map((v, i) => 2 * i + 3);
console.log(sol);
