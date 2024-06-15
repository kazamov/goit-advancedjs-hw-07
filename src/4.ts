class Key {
    private signature: string;

    constructor() {
        this.signature = Math.random().toString(36).substring(7);
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }

    getKey() {
        return this.key;
    }
}

class Door {
    private isOpened: boolean;

    constructor() {
        this.isOpened = false;
    }

    set opened(value: boolean) {
        this.isOpened = value;
    }

    get opened() {
        return this.isOpened;
    }
}

abstract class House {
    protected door: Door;
    protected key: Key;
    protected tenants: Person[];

    comeIn(person: Person) {
        if (this.door.opened) {
            this.tenants.push(person);
            this.door.opened = false;
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
        this.door = new Door();
        this.tenants = [];
    }

    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door.opened = true;
        }
    }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };