// 클래스: 객체를 생성하기 위한 템플릿

// 공장함수
function createMonster(name, hp, at) {
    return { name, hp, att };
}
const monster1 = createMonster("slime", 25, 10);
const monster2 = createMonster("slime", 26, 19);
const monster3 = createMonster("slime", 30, 31);

// 생성자 함수
// 첫번째 글자는 대문자
// new 키워드 사용
// this 사용
function Monster(name, hp, at) {
    this.name = name;
    this.hp = hp;
    this.at = at;
}
const monster4 = new Monster("slime", 15, 1);
const monster5 = new Monster("slime", 32, 109);
const monster6 = new Monster("slime", 24, 23);

function attack(monster) {
    monster.hp -= this.at;
}
