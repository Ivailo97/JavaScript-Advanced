function solve() {

    let usersData = document.getElementById('arr').value;
    let resultElement = document.getElementById('result');

    let pattern = /^(?<Name>[A-Z][a-z]*\s[A-Z][a-z]*)\s(?<Phone_Number>\+359(\s|-)\d\3\d{3}\3\d{3})\s(?<Email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})$/

    const appendParagraphToResult = (value) => {
        let p = document.createElement("p");
        p.innerHTML = value;
        resultElement.appendChild(p);
    }

    const formatKeyValuePair = ([key, value]) => `${key.replace('_', " ")}: ${value}`

    const extractValidData = (data) => {

        let matchObj = pattern.exec(data);

        matchObj ? Object.entries(matchObj.groups).map(formatKeyValuePair).forEach(appendParagraphToResult) :
            appendParagraphToResult('Invalid data')

        appendParagraphToResult('- - -')
    }

    JSON.parse(usersData).forEach(extractValidData)
}