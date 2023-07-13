function solution(survey, choices) {
    let score = {
        'R': 0, 'C': 0, 'J': 0, 'A': 0, 'T': 0, 'F': 0, 'M': 0, 'N': 0
    };
    survey.forEach((type, idx) => {
       if (choices[idx] < 4) {
           score[type[0]] += 4 - choices[idx]
       } else {
           score[type[1]] += choices[idx] - 4
       }
    })
    let answer = ''.concat(score['R'] >= score['T'] ? 'R' : 'T')
                .concat(score['C'] >= score['F'] ? 'C' : 'F')
                .concat(score['J'] >= score['M'] ? 'J' : 'M')
                .concat(score['A'] >= score['N'] ? 'A' : 'N')
    return answer;
}