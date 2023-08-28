function solution(today, terms, privacies) {
  const todayDate = new Date(today)
  const termsMap = {};
  for (let term of terms) {
      term = term.split(' ')
      termsMap[term[0]] = parseInt(term[1])
  }
  const validNum = privacies.map((privacy, idx) => {
      privacy = privacy.split(' ')
      const exp = new Date(privacy[0])
      exp.setUTCMonth(exp.getUTCMonth() + termsMap[privacy[1]])
      if (todayDate >= exp) return idx + 1
  });
  return validNum.filter(ele => ele)
}