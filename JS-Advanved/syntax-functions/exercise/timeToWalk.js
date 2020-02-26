function solve(steps, footprintLengthMeters, kmPerHour) {

    //meters
    let distance = steps * footprintLengthMeters;

    //m/s
    let speed = kmPerHour / 3.6;

    let minutesRested = Math.floor(distance / 500);

    //seconds
    let time = (distance / speed) + minutesRested * 60;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - hours * 3600 - minutes * 60);

    return `${hours < 10 ? 0 + '' + hours : hours}:${minutes < 10 ? 0 + '' + minutes : minutes}:${seconds < 10 ? 0 + '' + seconds : seconds}`;
}

console.log(solve(4000, 0.60, 5));