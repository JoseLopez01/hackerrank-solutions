const a = [2, 4];
const b = [16, 32, 96];

function getTotalX(a = [], b = []) {
  const factors = [];
  for (let i = a[0]; i <= b[0]; i++) {
    const isFactor = a.every((a_element) => !(i % a_element));
    if (isFactor) {
      factors.push(i);
    }
  }

  return factors.filter((factor) =>
    b.every((b_element) => !(b_element % factor))
  ).length;
}

const result = getTotalX(a, b);
console.log(result);
