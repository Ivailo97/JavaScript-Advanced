function solve() {

    let [element1, element2, resultElement] = [];

    return {

        init: function(selector1, selector2, resultSelector) {

            element1 = document.querySelector(selector1);
            element2 = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },

        add: function() {
            resultElement.value = Number(element1.value) + Number(element2.value);
        },
        subtract: function() {
            resultElement.value = Number(element1.value) - Number(element2.value);
        }
    }
}

let fn = solve();