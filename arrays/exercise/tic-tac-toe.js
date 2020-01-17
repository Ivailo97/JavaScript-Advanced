function solve(moves) {

    let dashboard =
        [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]

    let result = []

    const getColumnConcatData = i => dashboard.reduce((a, b) => a + b[i], '')

    const haveFilledRow = symbol => dashboard.map(x => x.reduce((a, b) => a + b, '')).some(x => x === `${symbol}${symbol}${symbol}`)

    const haveFilledCol = x => dashboard.reduce((a, _, i) => a || getColumnConcatData(i) === `${x}${x}${x}`, false)

    const leftDiagonalIsFilled = symbol => dashboard.reduce((a, _, i) => a + dashboard[i][i], '') === `${symbol}${symbol}${symbol}`

    const rightDiagonalIsFilled = symbol => dashboard.reduce((a, _, i) => a + dashboard[i][dashboard.length - 1 - i], '') === `${symbol}${symbol}${symbol}`

    const haveFilledDiagonal = x => leftDiagonalIsFilled(x) || rightDiagonalIsFilled(x)

    const playerWon = x => haveFilledRow(x) || haveFilledCol(x) || haveFilledDiagonal(x)

    const hasFreeSpace = () => dashboard.flat(1).some(x => x === false)

    const switchPlayer = p => p === 'X' ? 'O' : 'X'

    const addDashboardToResult = () => dashboard.forEach(x => result.push(x.join('\t')))

    let player = 'X'

    for (let i = 0; i < moves.length; i++) {

        let [row, col] = moves[i].split(' ')

        if (dashboard[row][col] !== false) {
            result.push("This place is already taken. Please choose another!")
            continue;
        }

        dashboard[row][col] = player

        if (playerWon(player)) {
            result.push(`Player ${player} wins!`)
            addDashboardToResult()
            break;
        }

        if (!hasFreeSpace()) {
            result.push("The game ended! Nobody wins :(")
            addDashboardToResult()
            break;
        }

        player = switchPlayer(player)
    }

    return result.join('\n')
}

console.log(solve(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]
))
