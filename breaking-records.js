const scores = [12, 24, 10, 24];

function breakingRecords(scores = []) {
  let min = scores[0];
  let max = scores[0];

  let brokeMin = 0;
  let brokeMax = 0;

  scores.forEach((score) => {
    if (score < min) {
      min = score;
      brokeMin++;
    } else if (score > max) {
      max = score;
      brokeMax++;
    }
  });

  return [brokeMin, brokeMax];
}
