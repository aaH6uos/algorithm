function solution(name, yearning, photo) {
  const getScore = (people) => {
      let score = people.reduce((sum, person) => {            
          let idx = name.indexOf(person);
          sum += idx != -1 ? yearning[idx] : 0
          return sum
      }, 0)
      return score
  }
  return photo.map((people) => getScore(people));
}