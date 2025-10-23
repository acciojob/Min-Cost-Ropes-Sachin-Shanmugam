function mincost(arr)
{ 
const heap = require('heap');
const minHeap = new heap.MinHeap();
	for (let length of arr) {
		minHeap.push(length);
	}
let totalcost = 0;
  while (minHeap.size() > 1) {
  	let first = minHeap.pop();
	  let second = minHeap.pop();

	let cost = first + second ;
	  let totalcost += cost;

	  minHeap.push(cost);
  }
	return totalcost;
}

module.exports=mincost;
