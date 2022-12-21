function collectOdds(nums) {
    let result = [];
    function helper(helperInput) {  // helper method
        if (helperInput.length == 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice[1]);
    }
    helper(nums);
    return result;
}

