function solve() {

    prepareToOptions();

    document.querySelector('#container button').addEventListener('click', convert);

    function convert() {

        let inputNumberElement = document.getElementById('input');

        let selectToElement = document.getElementById('selectMenuTo');

        let convertedValue = null;

        console.log(selectToElement.value);

        switch (selectToElement.value) {

            case 'binary':
                convertedValue = convertToBinary(inputNumberElement.value);
                break;
            case 'hexadecimal':
                convertedValue = convertToHexadecimal(inputNumberElement.value);
                break;
        }


        document.getElementById('result').setAttribute('value', convertedValue);

    }

    function convertToBinary(value) {

        let binaryResult = '';

        while (value !== 0) {
            let digit = value % 2;
            value = parseInt( value / 2 + '');
            binaryResult += digit;
        }

        return binaryResult.split('').reverse().join('');
    }

    function convertToHexadecimal(value) {
        return Number(value).toString(16).toUpperCase();
    }

    function prepareToOptions() {

        let selectElement = document.getElementById('selectMenuTo');
        let firstOption = selectElement.children[0];
        firstOption.setAttribute('value', 'binary');
        firstOption.innerHTML = 'Binary';

        let secondOption = document.createElement('option');
        secondOption.setAttribute('value', 'hexadecimal');
        secondOption.innerHTML = 'Hexadecimal';
        selectElement.appendChild(secondOption);
    }
}