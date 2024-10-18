// NOTE: 객체 생성: 객체는 여러 변수를 하나의 변수로 묶는다
const zerocho = {
    // 속성: 중괄호 내부의 정보
    // 형식: <속성이름> : <속성값>
    name: "조현영",
    year: 1994,
    month: 8,
    date: 12,
    gender: "M", // TIP: 마지막 속성 끝에도 쉼표 붙이기
};
console.log(zerocho);

// NOTE: 객체 속성에 접근하기
const name = "date";
zerocho.name;
zerocho["name"]; // 속성으로 접근시 문자열로 입력할 것
zerocho[name]; // 변수 name의 값을 활용하여 접근하게 됨

// NOTE: 없는 속성에 접근하기
zerocho.hello;

// NOTE: 속성 추가하기
zerocho.married = true;
console.log(zerocho);

// NOTE: 값 수정하기
zerocho.month = 9;
console.log(zerocho);

// NOTE: 속성 삭제하기
delete zerocho.gender;
console.log(zerocho);

// NOTE: 메서드
const debug = {
    log: function (value) {
        console.log(value);
    },
};
debug.log("Hello, method");

const debug2 = {
    log(value) {
        console.log(value);
    },
};
debug2.log("Help");

zerocho.name.last = "김";

