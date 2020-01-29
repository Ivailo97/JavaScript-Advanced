function solve() {

    let buttons = document.getElementsByTagName("button");
    let table = document.getElementsByTagName("table")[0];
    let checkElement = document.querySelector("#check p");

    buttons[0].addEventListener("click", showResult);
    buttons[1].addEventListener("click", clear);

    let allInputsElements = document.querySelectorAll("tbody td input");

    function clear() {
        for (let i = 0; i < allInputsElements.length; i++) {
            allInputsElements[i].value = "";
        }
        table.style.border = "";
        checkElement.style.color = "";
        checkElement.textContent = "";
    }

    function showResult() {

        for (let i = 0; i < allInputsElements.length; i += 3) {

            let uniqueRowValues = new Set();

            for (let j = 0; j < 3; j++) {

                uniqueRowValues.add(allInputsElements[i + j].value);
            }

            rowsAndColChecker(uniqueRowValues)
        }

        for (let i = 0; i < 3; i++) {

            let uniqueColValues = new Set();

            for (let j = 0; j < allInputsElements.length; j += 3) {

                uniqueColValues.add(allInputsElements[i + j].value);
            }

            rowsAndColChecker(uniqueColValues)
        }

        if (!checkElement.textContent) {
            table.style.border = "2px solid green";
            checkElement.style.color = "green";
            checkElement.textContent = "You solve it! Congratulations!";
        }

        function rowsAndColChecker(numbers) {

            if (numbers.size !== 3) {
                table.style.border = "2px solid red";
                checkElement.style.color = "red";
                checkElement.textContent = "NOP! You are not done yet...";
            }
        }
    }
}