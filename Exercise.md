## Ctrl F để search tên bài 
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
        //get the unique elements in the arr1
        return arr1.filter(w => {
            return !arr2.includes(w);
        })
        //get the unique elements in the arr2
        .concat(arr2.filter(w => {
            return !arr1.includes(w);
        }));
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

```
* Roman Numeral Converter
```javascript

function convertToRoman(num) {
  //create 2 arrays that contain number to access
  var number=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  //create a string to return
  var strRoman='';
  //for loop iterate through the number array
  for(i=0;i<number.length;i++){
    // if the input number is equal or larger than the number at index then subtract the number by the value at the index, 
    //at the same time return the roman counterpart to the string
    while(number[i]<=num){
      strRoman+=roman[i];
      num-=number[i];
    }
  }
 return strRoman;
}

convertToRoman(624);

```
* Wherefore art thou
```javascript
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(e => {
        //use for ..in to iterate through the properties of an object
        for (var i in source) {
            //if found an object in the collection array that doesn't contain the property or has a different value then return false 
            //so that the filter doesn't put that object in the array
            if (source[i] != e[i]) {
                return false;
            }
        }
        //if the object e has all the property of the source object then return that object e
        return true;
    });

    // Only change code above this line
    return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
```
