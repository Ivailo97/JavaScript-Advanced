function solve(input) {

    let objMap = {}

    let actions = {

        'create': (map, name) => map[name] = {},

        'createWithInherit': (map, name, parentName) => map[name] = Object.create(objMap[parentName]),

        'set': (map, name, key, value) => map[name][key] = value,

        'print': (map, name) => {

            let result = [];

            for (const key in map[name]) {
                result.push(`${key}:${map[name][key]}`)
            }

            console.log(result.join(', '))
        }
    }

    input.map(x => x.split(' ')).forEach(x => {

        let command = x[0];
        x.shift();

        if (x.includes('inherit')) {
            x = x.filter(x => x !== 'inherit');
            actions[`${command}WithInherit`](objMap, ...x)
        } else {
            actions[command](objMap, ...x)
        }
    })
}

let commands = ['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'
];

solve(commands)