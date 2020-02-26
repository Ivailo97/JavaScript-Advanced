function getManager() {

    let elements = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }

    let receipts = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1 },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }
    }

    const getError = (element) => `Error: not enough ${element} in stock`;

    let commands = {

        'restock': (element, quantity) => {
            elements[element] += Number(quantity)
            return 'Success';
        },
        'prepare': (recipe, quantity) => {

            let missingElementEntry;
            let errorMessage;

            for (let i = 0; i < quantity; i++) {

                missingElementEntry = Object.entries(receipts[recipe])
                    .find(kvp => elements[kvp[0]] < Number(kvp[1]));

                if (!missingElementEntry) {

                    Object.entries(receipts[recipe])
                        .forEach(kvp => elements[kvp[0]] -= Number(kvp[1]))
                } else {

                    errorMessage = getError(missingElementEntry[0])
                    break;
                }
            }

            return errorMessage ? errorMessage : 'Success'
        },

        'report': () => Object.keys(elements).reduce((a, b) => {
            a.push(`${b}=${elements[b]}`)
            return a;
        }, []).join(' ')
    }

    return function(command) {

        let commandTokens = command.split(' ');

        return commandTokens.length === 1 ? commands[commandTokens[0]]() :
            commands[commandTokens[0]](commandTokens[1], (commandTokens[2]))
    }
}