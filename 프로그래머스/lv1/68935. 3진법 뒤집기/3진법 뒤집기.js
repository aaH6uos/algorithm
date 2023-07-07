function solution(n) {
    const reversed =  [...n.toString(3)].reverse().join('')
    return parseInt(reversed, 3)
}