* Sum All Numbers in a Range
```javascript
function sumAll(arr) {
    var sum = 0;
    //swap position of the 2 values if arr0>arr1
    if (arr[0] > arr[1]) {
        //use destructuring 
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    for (var num = arr[0]; num <= arr[1]; num++) {
        sum += num;
    }

    return sum;
}

sumAll([1, 10]);
```
