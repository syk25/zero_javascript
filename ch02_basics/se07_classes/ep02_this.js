// this: 보통은 window 객체를 가리킨다
// 객체 메서드 내부에서는 객체 자체를 가리킨다
console.log(this);

function Monster(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
}
const monster1 = new Monster("슬라임", 25, 10);
const monster2 = Monster("슬라임", 25, 10);

console.log(monster1);
