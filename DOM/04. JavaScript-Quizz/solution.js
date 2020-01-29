function solve() {

    let rightAnswers = 0;

    let answersElements = document.getElementsByClassName('answer-text');

    let sectionNumber = 1;

    let resultElement = document.getElementsByClassName("results-inner");

    for(let answer of Array.from(answersElements)){
        answer.addEventListener('click',onClick);
    }

    let sectionElements = document.getElementsByTagName('section');  //3

    function onClick() {
        if (sectionNumber === 1) {
            if (this.textContent === "onclick") {
                rightAnswers++;
            }
            sectionElements[0].style.display = "none";
            sectionElements[1].style.display = "block";
            sectionNumber++;
        } else if (sectionNumber === 2) {

            if (this.textContent === "JSON.stringify()") {
                rightAnswers++;
            }
            sectionElements[1].style.display = "none";
            sectionElements[2].style.display = "block";
            sectionNumber++;
        } else {
            sectionElements[2].style.display = "none";
            if (this.textContent === "A programming API for HTML and XML documents") {
                rightAnswers++;
            }

            if (rightAnswers === 3) {
                resultElement.item(0).getElementsByTagName("h1")[0].textContent = "You are recognized as top JavaScript fan!";

            } else {
                resultElement.item(0).getElementsByTagName("h1")[0].textContent = `You have ${rightAnswers} right answers`;
            }
            document.getElementById("results").style.display = "block";
        }
    }
}
