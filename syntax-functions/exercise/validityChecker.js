function solve(arr) {

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    }
    
    function updateValidationMessage(message, x1, y1, x2, y2) {
    
        message += `{${x1}, ${y1}} to {${x2}, ${y2}} is `
    
        let firstPointDistanceToStartOfCoordinateSystem = calculateDistance(x1, y1, x2, y2)
    
        Number.isInteger(firstPointDistanceToStartOfCoordinateSystem) ? message += 'valid' : message += 'invalid'
    
        message += '\n';
    
        return message;
    }

    let result = ''

    let x1 = arr[0]
    let y1 = arr[1]
    let x2 = arr[2]
    let y2 = arr[3]

    result = updateValidationMessage(result, x1, y1, 0, 0)
    result = updateValidationMessage(result, x2, y2, 0, 0)
    result = updateValidationMessage(result, x1, y1, x2, y2)

    return result;
}


console.log(solve([3, 0, 0, 4]))
console.log(solve([2, 1, 1, 1]))