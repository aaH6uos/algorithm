function solution(cacheSize, cities) {
    if (cacheSize == 0) return cities.length * 5
    
    const updateCache = (city) => {
        let idx = caches.indexOf(city);
        if (caches.length == cacheSize)
        if (idx != -1) {
            caches.splice(idx, 1);
        } else if (caches.length == cacheSize) {
            caches.shift()
        }
        caches.push(city)
    }
    
    let caches = [];
    let answer = 0;
    for (let city of cities) {
        city = city.toLowerCase()
        if (caches.includes(city)) {
            answer += 1
        } else {
            answer += 5;
        }
        updateCache(city);
    }
    return answer;
}