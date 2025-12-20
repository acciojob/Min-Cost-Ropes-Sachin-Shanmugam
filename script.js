function mincost(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return 0;

  let totalCost = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b);

    const first = arr.shift();
    const second = arr.shift();

    const sum = first + second;
    totalCost += sum;

    arr.push(sum);
  }

  return totalCost;
}
