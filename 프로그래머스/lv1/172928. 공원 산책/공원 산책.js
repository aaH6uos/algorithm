function solution(park, routes) {
    let coordinate;
    for (let i in park) {
        let j = park[i].indexOf('S')
        if (j != -1) {
            coordinate = [parseInt(i), j];
            break;
        }
    }
    for (let route of routes) {
        let [op, n] = route.split(' ');
        let [row, col] = coordinate;
        let isValid = true;
        switch (op) {
            case 'N':
                for (let step=0; step<n; step++) {
                    if (row == 0) {
                        isValid = false;
                        break;
                    }
                    let next = park[--row][col]
                    if (!next || next == 'X') {
                        isValid = false
                        break;
                    }
                }
                break;
            case 'S':
                for (let step=0; step<n; step++) {
                    if (row == park.length - 1) {
                        isValid = false;
                        break;
                    }
                    let next = park[++row][col]
                    if (!next || next == 'X') {
                        isValid = false
                        break;
                    }
                }
                break;
            case 'W':
                for (let step=0; step<n; step++) {
                    if (col == 0) {
                        isValid = false;
                        break;
                    }
                    let next = park[row][--col]
                    if (!next || next == 'X') {
                        isValid = false
                        break;
                    }
                }
                break;
            case 'E':                
                for (let step=0; step<n; step++) {
                    if (col == park[0].length - 1) {
                        isValid = false;
                        break;
                    }
                    let next = park[row][++col]
                    if (!next || next == 'X') {
                        isValid = false
                        break;
                    }
                }
                break;
        }
        if (isValid) coordinate = [row, col]
    }    
    
    return coordinate;
}