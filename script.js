function mincost(arr) {
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Keep combining until one rope remains
  while (arr.length > 1) {
    // Sort to get two smallest ropes
    arr.sort((a, b) => a - b);

    const first = arr.shift();
    const second = arr.shift();

    const sum = first + second;
    cost += sum;

    // Push the combined rope back
    arr.push(sum);
  }

  return cost;
}
