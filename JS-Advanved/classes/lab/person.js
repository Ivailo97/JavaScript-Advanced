class Person {

    constructor(firstName, lastName, age, email) {

        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._email = email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get email() {
        return this._email;
    }

    toString() {
        return `${this._firstName} ${this._lastName} (age: ${this._age}, email: ${this._email})`
    }
}