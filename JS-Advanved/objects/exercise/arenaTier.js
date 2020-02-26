function solve(input) {

    const namesAndTotalPointsComparer = (a, b) => arena.getTotalSkills(b) - arena.getTotalSkills(a) === 0 ? a.localeCompare(b)
        : arena.getTotalSkills(b) - arena.getTotalSkills(a)

    const formatEntry = x => `${x}: ${arena.getTotalSkills(x)} skill\n${Object.keys(arena[x])
        .sort((a, b) => arena[x][b] - arena[x][a] === 0 ? a.localeCompare(b) : arena[x][b] - arena[x][a])
        .map(y => `- ${y} <!> ${arena[x][y]}`)
        .join('\n')}`

    const nonFunctions = k => k !== 'getTotalSkills' && k !== 'containsGladiators';

    let result = []

    let arena = {

        getTotalSkills: x => Object.values(arena[x]).reduce((a, b) => {
            a += b
            return a;
        }, 0),

        containsGladiators: function (...gladiators) {
            return gladiators.reduce((a, b) => a && arena.hasOwnProperty(b), true)
        }
    }

    input.forEach(x => {

        if (x.includes('->')) {

            let [name, technique, skill] = x.split(' -> ');

            !arena[name] ? arena[name] = { [technique]: +skill }
                : !arena[name][technique] ? arena[name][technique] = +skill
                    : arena[name][technique] < +skill ? arena[name][technique] = +skill
                        : console.log()

        } else if (x !== 'Ave Cesar') {

            let [gladiator1, gladiator2] = x.split(' vs ')

            if (arena.containsGladiators(gladiator1, gladiator2)) {

                let gladiator1Techiques = Object.keys(arena[gladiator1])
                let gladiator2Techiques = Object.keys(arena[gladiator2])

                let haveMutualTechniques = gladiator1Techiques.some(x => gladiator2Techiques.indexOf(x) !== -1)

                if (haveMutualTechniques) {

                    arena.getTotalSkills(gladiator1) > arena.getTotalSkills(gladiator2)
                        ? delete arena[gladiator2]
                        : delete arena[gladiator1]
                }
            }

        } else {
            Object.keys(arena).filter(nonFunctions)
                .sort(namesAndTotalPointsComparer)
                .map(x => formatEntry(x))
                .forEach(x => result.push(x))
        }
    })

    return result.join('\n')
}

console.log(solve(["Pesho -> BattleCry -> 400",
    "Gosho -> PowerPunch -> 300",
    "Stamat -> Duck -> 200",
    "Stamat -> Tiger -> 250",
    "Ave Cesar"
]))