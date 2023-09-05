function solution(phone_book) {
    phone_book.sort()
    return !phone_book.some((now, idx) => {
            let next = phone_book[idx+1] ?? ''
            return next.startsWith(now)
        })
}