function solve() {

    document.getElementsByTagName("button")[0].addEventListener("click", addToList);

    function addToList() {

        let inputElement = document.getElementsByTagName("input")[0];

        let inputValue = inputElement.value[0].toUpperCase() + inputElement.value.substr(1).toLowerCase();

        if (inputValue !== null && inputValue !== "") {

            let liElementIndex = inputValue.charAt(0).charCodeAt(0) - 65;

            let liElement = document.getElementsByTagName("li")[liElementIndex];

            let liElementContent = liElement.textContent;

            if (liElementContent === "") {
                liElement.textContent = inputValue;
            } else {
                let array = [liElementContent, inputValue];
                liElement.textContent = array.join(", ");
            }

            inputElement.value = null;
        }
    }
}