function solution(genres, plays) {
    const playMap = new Map();
    genres.forEach((genre, idx) => {
        if (!playMap[genre]) {
            playMap[genre] = [[idx, plays[idx]]]
        } else {
            playMap[genre].push([idx, plays[idx]])
        }        
    });
    
    const genreCnt = [];
    for (let genre in playMap) {
        let totalCnt = playMap[genre].reduce((acc, val) => 
            acc + val[1]
        , 0)
        genreCnt.push([genre, totalCnt, playMap[genre]])
    }
    genreCnt.sort((a, b) => b[1] - a[1])
    
    let answer = [];
    genreCnt.forEach(([genre, cnt, plays]) => {
        let sorted = plays.sort((a, b) => b[1] - a[1]);
        answer = answer.concat(sorted.map((play) => play[0]).slice(0,2))
    })
    
    return answer
}