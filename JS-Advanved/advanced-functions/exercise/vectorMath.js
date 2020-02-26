(function() {
    return {
        add: (vec1, vec2) => vec1.map((x, i) => x + vec2[i]),
        multiply: (vec1, scalar) => vec1.map(x => x * scalar),
        length: (vec1) => Math.sqrt(vec1.reduce((a, b) => a += b ** 2, 0)),
        dot: (vec1, vec2) => vec1.reduce((a, b, i) => a += b * vec2[i], 0),
        cross: (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0]
    }
}())