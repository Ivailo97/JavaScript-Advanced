function solve(input) {

    return JSON.stringify(input.reduce((a, b) => {
        let [name, level, items] = b.split(' / ')
        level = +level
        items = items ? items.split(', ') : []
        a.push({ name, level, items })
        return a;
    }, []))
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))