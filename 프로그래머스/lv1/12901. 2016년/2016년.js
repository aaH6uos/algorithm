function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let obj = {
        1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12:31
    };
    let cnt = b
    for (let m=1; m<a; m++) {
        cnt += obj[m]
    }
    return days[(cnt + 4) % 7]
}