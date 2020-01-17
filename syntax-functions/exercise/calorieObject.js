function solve(arr) {

    let calorieObject = {}

    for (let i = 0; i < [...arr].length - 1; i+=2) {
        calorieObject[arr[i]] = +arr[i + 1];
    }

    return calorieObject;
}

console.log(solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]))