function solution(s) {
    const strArr = s.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    return strArr.join(' ');
}