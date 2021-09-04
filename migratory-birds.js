const arr = [1, 4, 4, 4, 5, 3];

/* function migratoryBirds(arr = []) {
  const sorted = arr.sort();

  let max = 0;
  let result = sorted[0];

  for (let i = 0; i < sorted.length; i++) {
    const element = sorted[i];
    const firstIndex = sorted.findIndex(
      (sortedElement) => sortedElement === element
    );
    const lastIndex = sorted.lastIndexOf(element);
    i = lastIndex;

    const size = sorted.slice(firstIndex, lastIndex + 1).length;
    if (size > max) {
      max = size;
      result = element;
    } else if (size === max && result > element) {
      max = size;
      result = element;
    }
  }

  return result;
} */

function migratoryBirds(arr = []) {
  const sorted = arr.sort();

  let max = 0;
  let result = arr[0];

  for (let i = 0; i < sorted.length; i++) {
    const element = sorted[i];
    const size = sorted.filter(
      (sortedElement) => sortedElement === element
    ).length;

    if (size > max || (size === max && result > element)) {
      max = size;
      result = element;
    }
    i = i + size - 1;
  }
  return result;
}

console.log(migratoryBirds(arr));
