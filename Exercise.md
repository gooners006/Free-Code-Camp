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

* Diff Two Arrays
```javascript
function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.

    newArr =
        //get the unique elements in the arr1
        arr1.filter(w => {
            return !arr2.includes(w);
        })
        //get the unique elements in the arr2
        .concat(arr2.filter(w => {
            return !arr1.includes(w);
        }));

    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

```
