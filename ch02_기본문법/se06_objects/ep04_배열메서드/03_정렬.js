// sort(): 인수는 비교함수
// 비교함수의 결과값이 0보다 클 때 오름차순으로 정렬함

const arr = [879, 142, 748, 729, 295];
arr.sort((a, b) => a - b); // 오름차순으로 정렬
console.log(arr);

arr.sort((a, b) => b - a); // 내림차순으로 정렬
console.log(arr);
