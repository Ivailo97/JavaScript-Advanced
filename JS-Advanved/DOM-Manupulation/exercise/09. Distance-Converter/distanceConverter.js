function attachEventsListeners() {

    let convertButton = document.getElementById('convert')

    let units = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254]

    convertButton.addEventListener('click', convert);

    function convert() {

        let inputNumber = Number(document.getElementById('inputDistance').value);

        let inputUnit = document.getElementById('inputUnits').selectedIndex;
        let outputUnit = document.getElementById('outputUnits').selectedIndex;

        let newValue = inputNumber * units[inputUnit];
        document.getElementById('outputDistance').value = newValue / units[outputUnit];
    }
}