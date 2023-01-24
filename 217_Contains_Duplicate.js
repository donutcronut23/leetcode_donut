/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var dict = {};
    var is_duplicated = false;
    for (let a_number of nums) {
        if (a_number in dict){
            is_duplicated = true;
        } else{
            dict[a_number] = a_number;
        }
    }
    return is_duplicated;
};