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
* Search and Replace
```javascript

function myReplace(str, before, after) {
  //check if the case of before and after is different, is they are then convert them into the same case
  if((before.charAt(0)==before.charAt(0).toUpperCase())&&(after.charAt(0)==after.charAt(0).toLowerCase())){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  if((before.charAt(0)==before.charAt(0).toLowerCase())&&(after.charAt(0)==after.charAt(0).toUpperCase())){
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  //replace the 2
  var newStr = str.replace(before,after);
  return newStr;
}

myReplace("He is sleeping on the couch", "sleeping", "Sitting");

```
* Pig Latin
```javascript
function translatePigLatin(str) {
    var cutStr = [];
    //split the str into an array
    var arrStr = str.split("");
    //a function to check if the value is a vowel
    function check(value) {
        if (value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u') {
            return true;
        }
    }
    //if the 1st letter is a vowel then add way
    if (check(str[0])) {
        return str + 'way';
    }
    //find the 1st vowel in the string
    for (i = 0; i < arrStr.length; i++) {
        if (check(arrStr[i])) {
            //cut out every consonants before the 1st vowel
            cutStr = arrStr.splice(0, i);
            //join the cut consonants into an array
            cutStr = cutStr.join("");
            //move the cut consonants to the end of the array of the word
            arrStr.push(cutStr);
            break;
        }

    }

    //return the string
    return arrStr.join("") + "ay";
}

translatePigLatin("paragraphs");
```
* DNA Pairing
```javascript
//My way
function pairElement(str) {
    //create an object to contain the responding value 
    const o = { A: 'T', T: 'A', C: 'G', G: 'C' };
    //return the new string with every 2 value paired up
    let newStr = '';
    for (let i of str) {
        i = i + o[i];
        newStr += i;
    }
    //create a new array from the newa string
    const newArr = Array.from(newStr);
    //create the result array
    let result = [];
    for (i = 0; i < newArr.length; i += 2) {
        //put every pair into a string
        let pair = newArr[i] + newArr[i + 1];
        //convert that string into an array and push it into the result array
        result.push(Array.from(pair));
    }
    return result;
}

//Hai's way
function pairElement(str){
  const arr=str.split('');
  let result=[];
  for(e of arr){
    switch(e){
      case "A":
        result.push([e,'T']);
        break;
        case "T":
        result.push([e,'A']);
        break;
        case "C":
        result.push([e,'G']);
        break;
        case "G":
        result.push([e,'C']);
        break;
    }
  }
  return result;
}

pairElement("ATCGA");
```

* Missing Letters
```javascript

function fearNotLetter(str) {
  let arr=[];
  for(let i=0;i<str.length-1;i++){
    if((str.charCodeAt(i)+1)!=str.charCodeAt(i+1)){
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  } return undefined;
  
}

fearNotLetter("abd");

```
