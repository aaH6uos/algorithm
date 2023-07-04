function solution(name, yearning, photo) {
    const map = {};
    name.forEach((name, idx) => {
        map[name] = yearning[idx]
    })
    const answer = photo.map(people => (
        people.reduce((acc, name) => {
            let score = map[name] ?? 0
            return acc + score
        }, 0)
    ))
    return answer;
}