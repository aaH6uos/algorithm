function solution(players, callings) {
    // playerObj = {player: rank}, rankObj = {rank: player}
    let playerObj = {};
    let rankObj = {};
    players.forEach((player, idx) => {
        playerObj[player] = idx;
        rankObj[idx] = player;
    })
    // callings 돌면서 obj value 바꾸기
    callings.forEach(player => {
        let overtaken = rankObj[playerObj[player] - 1];
        rankObj[playerObj[overtaken]] = player
        rankObj[playerObj[player]] = overtaken
        playerObj[player] -= 1
        playerObj[overtaken] += 1
    })
    // obj를 배열로 만들어 return
    return Object.values(rankObj);
}