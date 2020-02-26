class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {

        if (!clientId.match(/^\d{6}$/gim)) {
            throw new TypeError('Client ID must be a 6-digit number')
        }

        this.clientId = clientId;

        if (!email.match(/\w+@[\w\.]+/gim)) {
            throw new TypeError('Invalid e-mail')
        }

        this.email = email;

        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }

        if (!firstName.match(/^[a-zA-Z]+$/gim)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this.firstName = firstName;

        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }

        if (!lastName.match(/^[a-zA-Z]+$/gim)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')