class Monster {
    constructer(name, hp, att) {
        this.name = name;
        this.hp = hp;
        this.att = att;
    }
    attack(monster) {
        monster.hp -= this.att;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    nameAndAge() {
        console.log(this.name, this.age);
    }
}

mike = new Person("Mike", 29);
mike.nameAndAge();
