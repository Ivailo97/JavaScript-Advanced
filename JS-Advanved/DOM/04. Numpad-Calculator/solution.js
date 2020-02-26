function solve() {

    let buttonsElements = document.getElementsByTagName("button");

    Array.from(buttonsElements).filter(b => b.className !== "clear" && b.value !== "=")
        .forEach(x => x.addEventListener('click', transferValue));

    buttonsElements[15].addEventListener("click", solveExpression);

    buttonsElements[0].addEventListener("click", clearResult);

    let expressionOutputElement = document.getElementById("expressionOutput");
    let resultOutputElement = document.getElementById("resultOutput");

    function transferValue() {

        if (isNaN(this.value) && this.value !== '.') {
            expressionOutputElement.innerHTML += (" " + this.innerHTML + " ");
        } else {
            expressionOutputElement.innerHTML += this.innerHTML;
        }
    }

    function solveExpression() {

        const regex = /^\d+(\.\d+)? [\/+\-x] \d+(\.\d+)?(?<!\/ 0)$/gm;

        let result = expressionOutputElement.innerHTML.match(regex);

        if (result !== null) {

            resultOutputElement.innerHTML = eval(expressionOutputElement.innerHTML.replace(" ", "").replace("x", "*"));

        } else {
            resultOutputElement.innerHTML = "NaN"
        }
    }

    function clearResult() {
        expressionOutputElement.innerHTML = "";
        resultOutputElement.innerHTML = "";
    }
}