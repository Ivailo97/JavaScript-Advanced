function solve() {

    let textInput = document.getElementById('text');
    let nameConventionInput = document.getElementById('naming-convention');
    let resultElement = document.getElementById('result');

    let transform = {

        'Camel Case': (string) => {
            let result = string.split(/\s+/).map(x => `${x[0].toLocaleUpperCase()}${x.substring(1).toLocaleLowerCase()}`).join('');
            return `${result[0].toLocaleLowerCase()}${result.substring(1)}`
        },
        'Pascal Case': (string) =>
            string.split(/\s+/)
            .map(x => `${x[0].toLocaleUpperCase()}${x.substring(1).toLocaleLowerCase()}`)
            .join(''),
    }

    try {
        resultElement.innerHTML = transform[nameConventionInput.value](textInput.value)
    } catch (err) {
        resultElement.innerHTML = 'Error!'
    }
}