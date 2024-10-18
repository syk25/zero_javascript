/* 함수 선언하기 */
function a() {}
const b = function () {};
const c = () => {};

function d() {
    for (let i = 0; i < 5; i++) {
        if (i >= 3) {
            return i;
        }
    }
}
d();

/* 매개변수와 인수 사용 */
function a(p) {
    console.log(p);
}

a("argument");

function e(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}

e("Hello", "Paramter", "Argument");

const multiply = (x, y, z) => {
    return x * y * z;
};

console.log(multiply(1, 2, 3)); // 6

const func = () => {
    return () => {
        console.log("Hello");
    };
};

const temp = func();

temp();
func()();

const outerfunc = (msg) => {
    return () => {
        console.log(msg);
    };
};

const innerfunc1 = outerfunc("Hello");
const innerfunc2 = outerfunc("Bye");
const innerfunc3 = outerfunc("안녕");

innerfunc1();
innerfunc2();
innerfunc3();

const hof = (a) => (b) => (c) => {
    return a + b * c;
};

const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third); // 23
