function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replaceAll(/[^0-9a-z\._\-]/g, '')
        .replaceAll(/\.+/g, '.')
        .replaceAll(/^\.|\.$/g, '')
    if (new_id.length == 0) {
        new_id = 'a'
    }
    if (new_id.length > 15) {
        new_id = new_id.slice(0, 15)
            .replace(/\.$/, '')
    }
    while (new_id.length < 3) {
        new_id += new_id.slice(-1)
    }
    return new_id;
}