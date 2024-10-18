class Unit {
    constructor(name, hp, att) {
        this.name = name;
        this.hp = hp;
        this.att = att;
    }
    attack(target) {
        target.hp -= this.att;
    }
}

class Hero extends Unit {
    constructor(name, hp, att) {
        super(name, hp, att);
        this.maxHp = hp;
    }

    attack(target) {
        super.attack(target);
        console.log("부모 클래스의 attack()외의 추가동작");
    }

    heal() {
        // 부모 클래스 외의 메서드 동작
        this.hp = this.maxHp;
    }
}

class Monster extends Unit {
    constructor(name, hp, att) {
        super(name, hp, att);
    }
    attack(target) {
        super.attack(target);
    }
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name);
    }
    sayAge() {
        console.log(this.age);
    }
}

class SWE extends Human {
    constructor(name, age, availableLanguages) {
        super(name, age);
        this.availableLanguages = availableLanguages;
    }
    showAvailableLanguages() {
        console.log(this.availableLanguages);
    }
}

Ben = new SWE("Ben", 31, ["HTML", "CSS", "Javascript"]);
Ben.sayName();
Ben.sayAge();
Ben.showAvailableLanguages();
