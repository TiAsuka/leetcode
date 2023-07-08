var twoSum = function(numbers,target){
    let left = 0;
    let right = numbers.length-1;
    while(left<right){
        let sum = numbers[left]+numbers[right];
        if(sum==target){
            return new Array(left+1,right+1)
        }else if(sum<target){
            ++left
        }else{
            --right
        }
    }
    return new Array(-1,-1)
}

console.log(twoSum([2,7,11,15],9))