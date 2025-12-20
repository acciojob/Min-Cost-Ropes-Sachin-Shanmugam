function mincost(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return 0;

  // Create a copy so original array is not mutated
  let heap = [...arr];
  let totalCost = 0;

  while (heap.length > 1) {
    heap.sort((a, b) => a - b);

    const first = heap.shift();
    const second = heap.shift();

    const sum = first + second;
    totalCost += sum;

    heap.push(sum);
  }

  return totalCost;
}
