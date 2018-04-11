function smallestCommons(arr) {
    var newArr = [];
    //swap position of the 2 values if arr0>arr1
    if (arr[0] > arr[1]) {
        //use destructuring 
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    for (var num = arr[0]; num <= arr[1]; num++) {
        newArr.push(num);
    }
    //find the greatest common divisor to use to calculate the least common multiple
    function gcd(a, b) {
        while (a != b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
        // now a is the gcd
        return a;
    }

    var lcm = newArr.reduce(
        (accumulator, currentValue) => (accumulator * currentValue) / gcd(accumulator, currentValue),
        1
    );
    return lcm;
}


smallestCommons([1, 5]);