function solve(arr) {

    let object = arr.reduce((a, b) => {

        let tokens = b.split(' -> ');
        let town = tokens[0];
        let product = tokens[1];
        let quantityAndUnitPrice = tokens[tokens.length - 1].split(' : ');
        let totalPrice = +quantityAndUnitPrice[0] * +quantityAndUnitPrice[1];

        !a[`Town - ${town}`] ? a[`Town - ${town}`] = [`$$$${product} : ${totalPrice}`]
         :a[`Town - ${town}`].push(`$$$${product} : ${totalPrice}`)

        return a;
    }, {})

    return Object.keys(object)
        .reduce((a, b) => {
            a.push(b)
            object[b].forEach(x => a.push(x))
            return a
        },[]).join('\n')
}

console.log(solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
))