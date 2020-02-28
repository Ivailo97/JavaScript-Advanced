function solve(commands) {

    let actions = {
        'add': (arr, str) => [...arr, str],
        'remove': (arr, str) => arr.filter(x => x !== str),
        'print': (arr, _) => {
            console.log(arr.join(','))
            return arr;
        }
    }

    let strings = [];

    commands.map(x => x.split(" "))
        .forEach(([command, param]) => strings = actions[command](strings, param));
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])