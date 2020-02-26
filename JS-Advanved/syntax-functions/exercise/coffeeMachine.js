function solve(orders) {

    let map = {
        'caffeine': 0.80,
        'decaf': 0.90,
        'tea': 0.80,
        'milk': (x) => 0.1 * x,
        'sugar': 0.10
    };

    let output = [];

    function orderContainsMilk(arr) {
        return arr.filter(t => t === 'milk').length !== 0
    }

    function updateOutput(order) {

        let orderTokens = order.split(', ');

        let money = +orderTokens[0];

        let orderType = orderTokens[1];

        let orderPrice;

        if (orderType === 'coffee') {

            let coffeeType = orderTokens[2];
            orderPrice = map[coffeeType];

        } else {

            orderPrice = map.tea;
        }

        if (orderContainsMilk([...orderTokens])) {

            orderPrice += +map.milk(orderPrice).toFixed(1);
        }

        let sugarQuantity = +orderTokens[orderTokens.length - 1];

        if (sugarQuantity !== 0) {
            orderPrice += map.sugar;
        }

        if (money >= orderPrice) {

            totalIncome += orderPrice;
            money -= orderPrice;
            output.push(`You ordered ${orderType}. Price: $${orderPrice.toFixed(2)} Change: $${money.toFixed(2)}`)

        } else {
            output.push(`Not enough money for ${orderType}. Need $${(orderPrice - money).toFixed(2)} more.`)
        }
    }

    let totalIncome = 0;

    [...orders].forEach(o => updateOutput(o))

    output.push(`Income Report: ${totalIncome.toFixed(2)}`);

    return output.join('\n');
}


console.log(solve(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']));

console.log(solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']));