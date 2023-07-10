def solution(lottos, win_nums):
    answer = []
    correct = 0
    maybe = 0
    for num in lottos:
        if num in win_nums:
            correct += 1
            maybe += 1
        if num == 0:
            maybe += 1
    if maybe > 1:
        answer.append(7-maybe)
    else:
        answer.append(6)
    if correct > 1:
        answer.append(7-correct)
    else:
        answer.append(6)
    return answer