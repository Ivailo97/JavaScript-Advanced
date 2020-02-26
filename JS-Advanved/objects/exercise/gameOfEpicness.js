function solve(...input) {

    const aggregateKingdomsMap = (a, b) => {
        !a[b.kingdom] ? a[b.kingdom] = { [b.general]: b.army }
            : !a[b.kingdom][b.general] ? a[b.kingdom][b.general] = b.army
                : a[b.kingdom][b.general] += b.army
        return a
    }

    const notInSameKingdom = x => x[0] !== x[2]

    const updateArmies = ([winnerKingdom, winnerGeneral], [loserKingdom, loserGeneral]) => {
        kingdoms[winnerKingdom][winnerGeneral] = Math.floor(1.1 * kingdoms[winnerKingdom][winnerGeneral])
        kingdoms[loserKingdom][loserGeneral] = Math.floor(0.9 * kingdoms[loserKingdom][loserGeneral])
    }

    const updateGeneralsInfo = (winner, loser) => {
        !generalsInfo[winner] ? generalsInfo[winner] = [1, 0] : generalsInfo[winner][0]++
        !generalsInfo[loser] ? generalsInfo[loser] = [0, 1] : generalsInfo[loser][1]++
    }

    const updateData = x => {

        let [attackerKingdom, attackerGeneral, defenderKingdom, defenderGeneral] = x;
        let attackerArmy = kingdoms[attackerKingdom][attackerGeneral]
        let defendingArmy = kingdoms[defenderKingdom][defenderGeneral]

        if (attackerArmy > defendingArmy) {
            updateGeneralsInfo(attackerGeneral, defenderGeneral)
            updateArmies([attackerKingdom, attackerGeneral], [defenderKingdom, defenderGeneral])
        } else if (defendingArmy > attackerArmy) {
            updateGeneralsInfo(defenderGeneral, attackerGeneral)
            updateArmies([defenderKingdom, defenderGeneral], [attackerKingdom, attackerGeneral])
        }
    }

    const aggregateWins = (a, b) => a += generalsInfo[b] ? generalsInfo[b][0] : 0

    const aggregateLosses = (a, b) => a += generalsInfo[b] ? generalsInfo[b][1] : 0

    const getWins = x => Object.keys(kingdoms[x[0]]).reduce(aggregateWins, 0)

    const getLosses = x => Object.keys(kingdoms[x[0]]).reduce(aggregateLosses, 0)

    const byGeneralsWinsDescThenByLossesAscFinalyByKingdomNamesAsc = (x, y) =>
        getWins(y) - getWins(x) || getLosses(x) - getLosses(y) || x[0].localeCompare(y[0])

    const byGeneralArmyDescending = (x, y) => kingdoms[winnerKingdom[0]][y] - kingdoms[winnerKingdom[0]][x]

    const formatGeneral = x => `/\\general: ${x}\n---army: ${winnerKingdom[1][x]}\n---wins: ${generalsInfo[x] ? generalsInfo[x][0] : 0}\n---losses: ${generalsInfo[x] ? generalsInfo[x][1] : 0}`

    const aggregateResultArray = (a, b) => {
        a.push(formatGeneral(b))
        return a
    }

    let kingdoms = input[0].reduce(aggregateKingdomsMap, {})

    let generalsInfo = {}

    input[1].filter(notInSameKingdom).forEach(updateData)

    let winnerKingdom = Object.entries(kingdoms)
        .sort(byGeneralsWinsDescThenByLossesAscFinalyByKingdomNamesAsc)[0]

    return Object.keys(winnerKingdom[1])
        .sort(byGeneralArmyDescending)
        .reduce(aggregateResultArray, [`Winner: ${winnerKingdom[0]}`])
        .join('\n')
}

console.log(solve(
    [
        { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 }
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]
))