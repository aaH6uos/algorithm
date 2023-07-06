function solution(players, callings) {
    // playerObj = {player: rank}, rankObj = {rank: player}
    let obj = {};
    players.forEach((player, idx) => {
        obj[player] = idx;
    })
    // callings 돌면서 obj value 바꾸기
    callings.forEach(player => {
        let rank = obj[player]
        let overtaken = players[rank - 1];
        
        obj[overtaken] += 1
        obj[player] -= 1
        
        players[rank] = overtaken
        players[rank-1] = player
    })
    // obj를 배열로 만들어 return
    return players;
}