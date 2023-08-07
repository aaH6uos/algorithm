process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    // const a = Number(n[0]), b = Number(n[1]);
    for (let nbr=0; nbr<m; nbr++) {
        console.log("*".repeat(n))
    }
});