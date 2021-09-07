# 前 K 个高频元素

给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

思路：

1. 遍历数组将数组转成map，key为整数，value为出现次数，同时将数组通过Set去重，然后利用map给数组进行排序，输出前k个。

```js
var topKFrequent = function(nums, k) {
    let map = new Map();
    let arr = [...new Set(nums)];
    nums.forEach((num)=>{
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    })

    return arr.sort((a,b)=>map.get(b)-map.get(a)).slice(0,k);
}
```

时间复杂度O(nlgn): 遍历数组时间复杂度O(n)，数组排序的时间复杂度为O(nlgn)，所以综合时间复杂度为O(nlgn);

空间复杂度O(n): 利用了规模为n的Map;

2. 利用最小堆，当heap的规模为k是，建立最小堆，之后如果元素出现次数大于最小堆顶的元素，则替换堆顶并进行堆调整，如果小于则不处理。最后返回的heap就是出现出现频率前 k 高的元素。

```js
var topKFrequent = function(nums, k) {
    let map = new Map();
    let heap = [];

    nums.forEach((num)=>{
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    })

    let i=0;
    map.forEach((value,key)=>{
        if(i<k){
            heap.push(key);
            if(i===k-1){
                buildHeap(heap, map,k)
            }
        }else if(value>map.get(heap[0])){
            heap[0] = key;
            heapify(heap,map,k,0);
        }
        i++;
    })

    return heap;
};

function swap(heap,i,j){
    [heap[j],heap[i]] = [heap[i],heap[j]]
}

function buildHeap(heap, map,k){
    for(let i=Math.floor(k/2-1);i>=0;i--){
        heapify(heap,map,k,i);
    }
}

function heapify(heap,map,k,i){
    const lastNoLeaf = Math.floor(k/2-1);

    while(i<=lastNoLeaf){
        const left = i*2+1;
        const right = i*2+2;
        let minIndex = i;
        if(map.get(heap[left])<map.get(heap[minIndex])){
            minIndex = left
        }
        if(right<k && map.get(heap[right])<map.get(heap[minIndex])){
            minIndex = right
        }
        if(i === minIndex){
            return;
        }
        swap(heap,minIndex,i);
        i = minIndex;
    }
}
```

时间复杂度O(nlgk): 遍历数组的时间复杂度为O(n)，遍历map的时间复杂度为O(n)，堆调整的时间复杂度为O(lgk), 所以综合时间复杂度为O(nlgk)

空间复杂度：O(n)