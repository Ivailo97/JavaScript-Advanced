function result(name, age, weight, height) {

    let bmi = weight / Math.pow(height / 100, 2)

    let status;

    if (bmi < 18.5) {
        status = 'underweight'
    } else if (bmi < 25) {
        status = 'normal'
    } else if (bmi < 30) {
        status = 'overweight'
    } else {
        status = 'obese'
    }

    let resultObj = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(bmi),
        status: status
    }

    if (status === 'obese') {
        resultObj.recommendation = 'admission required';
    }

    return resultObj
}