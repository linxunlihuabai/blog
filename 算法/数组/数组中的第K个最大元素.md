# 数组中的第K个最大元素

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

思路：利用小项堆；建立一个规模为k的小项堆，遍历数组，当堆元素小于k个时把元素放入堆中，当堆的规模为k时建立一次小项堆；然后继续遍历，只有当元素大于堆顶元素时，将堆顶元素进行替换并进行堆调整，最后堆顶的元素就是数组中第 k 个最大的元素。时间复杂度O(nlgk)

```js
var findKthLargest = function(nums, k) {
    let heap = [];

    for(let i=0;i<nums.length;i++){
        if(i<k){
            heap.push(nums[i]);
            if(i===k-1){
                buildHeap(heap,k);
            }
        }else if(nums[i]>heap[0]){
            heap[0] = nums[i];
            heapify(heap, k, 0)
        }
    }

    return heap[0];
};

function swap(heap,i,j){
    [heap[j],heap[i]] = [heap[i],heap[j]];
}

function heapify(heap, k, i){
    const lastNoLeaf = Math.floor(k/2-1);
    while(i<=lastNoLeaf){
        const left = 2*i+1;
        const right = 2*i+2;
        let minIndex = i;
        if(heap[left]<heap[minIndex]){
            minIndex = left;
        }
        if(right<k && heap[right]<heap[minIndex]){
            minIndex = right;
        }
        if(i===minIndex){
            return;
        }

        swap(heap,minIndex,i);
        i = minIndex;
    }
}

function buildHeap(heap, k){
    for(let i = Math.floor(k/2-1);i>=0;i--){
        heapify(heap, k, i);
    }
}
```

快速选择算法：利用快速排序的思想，每次划分操作后都可以得到一个元素的最终位置，只要整个最终位置为倒数第k个的下标，那我们就找到了第k个最大元素，我们并不需要关注其他两边的元素是否有序。所以在分解的过程当中，我们会对子数组进行划分，如果划分得到的 p 正好就是我们需要的下标，就直接返回 nums[p]；否则，如果 p 比目标下标小，就递归右子区间，否则递归左子区间。这样就可以把原来递归两个区间变成只递归一个区间，提高了时间效率。时间复杂度O(n)。

```js
var findKthLargest = function(nums, k) {
   return quickSelect(nums, 0,nums.length-1,nums.length-k);
};

function swap(arr,i,j){
  [arr[j],arr[i]] = [arr[i],arr[j]];
}

function partition(arr,left,right){
    let flagIndex = left;
    let index = left+1;
    for(let i=index;i<=right;i++){
        if(arr[i]<arr[flagIndex]){
            swap(arr,i,index);
            index++;
        }
    }

    swap(arr,flagIndex,index-1);
    return index-1;
}

function randomPartition(arr,left,right){
    let i = Math.floor(Math.random() * (right-left+1)) + left;
    swap(arr,i,left);
    return partition(arr,left,right);
}

function quickSelect(arr, left,right,index){
    let p = randomPartition(arr,left,right);

    if(p === index){
        return arr[index]
    }else{
        return p<index ? quickSelect(arr, p+1,right,index) : quickSelect(arr, left,p-1,index)
    }
}
```

我们知道快速排序的性能和「划分」出的子数组的长度密切相关。直观地理解如果每次规模为 nn 的问题我们都划分成 11 和 n - 1n−1，每次递归的时候又向 n - 1n−1 的集合中递归，这种情况是最坏的，时间代价是 O(n ^ 2)。我们可以引入随机化来加速这个过程，它的时间代价的期望是 O(n)O(n)
