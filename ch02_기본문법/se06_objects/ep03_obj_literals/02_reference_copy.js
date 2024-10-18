// 변수 a와b 그리고 객체는 참조관계
// a와 b는 동일한 객체를 참조
// 참조: 객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 동일한 객체를 가리킨다
const a = { name: "zerocho" };
const b = a;
console.log(b.name);
a.name = "hero";
console.log(b.name);

// 값의 복사
// 복사: 값을 저장한 변수를 다른 변수에 대입하면 두 변수에 대입 된 값들은 서로 독립적이다
let c = "sun";
let d = c;
c = "hero";
console.log(d);

// 객체의 복사의 종류: 얕은 복사, 깊은 복사
const array = [{ j: "k" }, { l: "m" }]; // array[0], array[1]
const reference = array; // 객체의 참조
console.log(reference === array);
console.log(reference[0] === array[0]); // 객체 내부의 객체도 참조를 하게 됨

// 얕은 복사: 외부 객체는 독립적이나 내부객체는 참조관계 유지
// 방법: 스프레드문법, slice(), concat()
const shallow = [...array];
console.log(array === shallow); // false
console.log(array[0] === shallow[0]); // true

const shallow2 = array.slice();
const shallow3 = array.concat();
console.log(array === shallow2); // false
console.log(array[0] === shallow2[0]); // true
console.log(array === shallow3); // false
console.log(array[0] === shallow3[0]); // true

// 깊은 복사: 외부 객체 뿐만 아니라 내부객체도 복사
const deep = JSON.parse(JSON.stringify(array)); // 객체를 문자열로 변환 후, 다시 객체로 변환
console.log(array === deep); // false
console.log(array[0] === deep[0]); // false

// 연습문제: 객체의 참조 관계
const g = { name: "강아지" };
const e = g;
const f = e;
g.name = "고양이";
console.log(e, f);


