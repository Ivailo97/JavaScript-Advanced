function solve(arr) {

    let map = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
        'mad': 'reckless driving',
        'too fast': 'excessive speeding',
        'faster': 'speeding'
    }

    let drivingSpeed = +arr[0];
    let area = arr[1];

    let result = "";

    let normalSpeed = map[area];

    if (drivingSpeed > normalSpeed) {

        drivingSpeed - normalSpeed > 40 ?
            result = map['mad'] :
            drivingSpeed - normalSpeed > 20 ?
                result = map['too fast'] :
                result = map['faster']
    }

    return result;
}

console.log(solve([40, 'city']))
console.log(solve([21, 'residential']))
console.log(solve([120, 'interstate']))
console.log(solve([200, 'motorway']))