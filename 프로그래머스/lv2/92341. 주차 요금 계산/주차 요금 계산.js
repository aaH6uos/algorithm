function solution(fees, records) {
    const getMinutes = (time) => {
        let [hour, minute] = time.split(':');
        return parseInt(hour) * 60 + parseInt(minute)
    };
    
    const midNight = getMinutes('23:59')
    
    const recordMap = records.reduce((recordMap, record) => {
        let [time, carNum, status] = record.split(' ');
        let duration = recordMap[carNum] ?? 0
        if (status == 'IN') {
            duration += midNight - getMinutes(time)
        } else {
            duration -= midNight - getMinutes(time)
        }
        return {...recordMap, [carNum]: duration}
    }, {})
    
    const [basicTime, basicFee, unitTime, unitFee] = fees
    const getFee = (time) => {
        if (time <= basicTime) {
            return basicFee
        } else {
            return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee
        }
    }
    
    return Object.keys(recordMap)
        .sort()
        .map(carNum => {
                return getFee(recordMap[carNum])
            })
}