function solve(input) {

    const parts = {
        engines: [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }],
        cariages: {
            'hatchback': (color) => { return { type: 'hatchback', color } },
            'coupe': (color) => { return { type: 'coupe', color } }
        },
    }

    return {
        model: input.model,
        engine: parts.engines.find(x => x.power >= input.power),
        carriage: parts.cariages[input.carriage](input.color),
        wheels: new Array(4).fill(input.wheelsize % 2 === 0 ? input.wheelsize - 1 : input.wheelsize)
    };
}

let car = solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})

console.log(car);