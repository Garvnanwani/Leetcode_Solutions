function rotate(nums, k) {
    while(k-- > 0) nums.unshift(nums.pop());
};
