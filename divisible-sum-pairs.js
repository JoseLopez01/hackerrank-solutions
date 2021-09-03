const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

function birthday(s = [], d, m) {
  const limit = s.length - (m - 1);
  let answer = 0;

  for (let i = 0; i < limit; i++) {
    const canShare =
      s.slice(i, i + m).reduce((acc, current) => acc + current) === d;
    if (canShare) {
      answer++;
    }
  }
  return answer;
}

console.log(birthday(s, d, m));
