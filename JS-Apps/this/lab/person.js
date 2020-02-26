class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = `${firstName} ${lastName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(fullName) {

        const names = fullName.split(' ');

        if (names.length === 2) {
            this._firstName = names[0];
            this._lastName = names[1];
            this._fullName = `${names[0]} ${names[1]}`
        }
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName) //Nikola
console.log(person.lastName) //Tesla