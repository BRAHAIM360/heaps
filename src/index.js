import { maxHeap } from "./maxheap";

const heap = new maxHeap();
//simple test
heap.add(5); //[ 5 ]
heap.add(2); //[5, 2]
heap.add(3); //[ 5, 3, 2 ]
heap.add(4); //[ 5, 4  3, 2]
heap.add(8); //[ 8, 5, 4, 3, 2]

console.log(heap.pop()); //8  =>[  5, 4, 3, 2]
console.log(heap.pop()); //5  =>[ 4, 3, 2]
console.log(heap.pop()); //4  =>[ 3, 2]
console.log(heap.pop()); //3  =>[ 2]
console.log(heap.pop()); //2  =>[]
