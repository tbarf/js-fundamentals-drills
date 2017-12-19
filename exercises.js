/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

let nums = [1, 2, 3, 4, -5];
let nums2 = [6, 7, 8, 9, 0];
const doubleArray = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};
console.log(doubleArray(nums));
/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
const sumArrays = function (arr1, arr2) {
  const combine = [];
  for (i = 0; i < arr1.length; i++) {
    combine.push(arr1[i] + arr2[i]);
  }
  return combine;
};
console.log(sumArrays(nums, nums2));
/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
const stringCount = function (str) {
  for (i = 0; i < str.length; i++) {
    return str.length;
  }
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
const arrayLength = function (arr) {
  for (i = 0; i < arr.length; i++) {
    return arr.length;
  }
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
const countAll = function (arr) {
  let counted = 0;
  for (i = 0; i < arr.length; i++) {
    counted += arr[i];
  }
  return counted;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
const countStrings = function (arr) {
  const counted = [];
  for (i = 0; i < arr.length; i++) {
    counted.push(arr[i].length);
  }
  return counted;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
const countAllStrings = function (str) {
  let total = 0;
  for (i = 0; i < str.length; i++) {
    total += str[i].length;
  }
  return total;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
const convertToArray = function (obj) {
  return Object.values(obj);
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
const objectSize = function (obj) {
  temparr = obj.entries;
  return temparr.length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
const createZeroFilledArray = function (num) {
  const temparr = [];
  for (i = 0; i < num; i++) {
    temparr[i] = 0;
  }
  return temparr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
const poppedArray = function (arr) {
  const poped = arr.pop;

  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
const splitString = function (str) {
  const temp = str.split("");
  return temp;
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
const lengthOfLast = function (str) {
  temp = str.pop();
  return temp.length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
let sumBelowTen = function (arr) {
  let temp = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      temp += arr[i];
    }
    return temp;
  }
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
let moreThanTenLetters = function (arr) {
  temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      temp += 1;
    }

  }

  return temp;
};


/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
let multiplyAll = function (arr) {
  count = 1;
  for (let i = 0; i < arr.length; i++) {
    count *= arr[i];
  }
  return count
};
/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getKeys = function (obj) {
  let keys = [];
  return Object.keys(obj);
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
let sumAllPositive = function (nums) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result += nums[i]
    }
  }
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */

let stringCountBelowThree = function (arr) {
    let result = 0;
    for (var i = 0; i < arr[i].length; i++) {
      if (arr[i].length <= 3) {
        result += 1;
      }
    }
    let stringCountBelowThree = function (arr) {
      var fruits = ['Apple', 'Banana'];
      let result = 0;
      for (var i = 0; i < arr[i].length; i++) {
        if (arr[i].length <= 3) {
          result += arr[i].length;
        }
      }

      return result;
    };


    console.log(stringCountBelowThree(fruits));

    /* #countObjects
     *
     * Takes in an array of objects and returns the amount of objects in the array.
     *
     * @param {Array}
     * @return {Number}
     */


    let countObjects = function (arr) {
      let num = 0;
      for (let i = 0; i < arr.length; i++) {
        num += 1;
        return num;
      };

      /* #getObjectKeys
       *
       * Takes in an object and returns an array of all the object's keys.
       *
       * @param {Object}
       * @return {Array}
       */
      let getObjectKeys = function (obj) {
        return Object.keys(obj);

      };

      /* #getObjectValues
       *
       * Takes in an object and returns an array of all the object's values.
       *
       * @param {Object}
       * @return {Array}
       */
      let getObjectValues = function (obj) {
        return Object.values(obj);
      };

      /* #makeObject
       *
       * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
       *
       * @param {String}
       * @param {String}
       * @return {Object}
       */
      let makeObject = function (str1, str2) {
        let obj = {};
        obj.key = str1;
        obj.value = str2;
        return obj;
      };

      /* #makeObjectReverse
       *
       * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
       *
       * @param {String}
       * @param {String}
       * @return {Bool}
       */
      let makeObjectReverse = function (str1, str2) {
        let obj = {};
        obj.value = str1;
        obj.key = str2;
        return obj;
      };

      /* #tupleToObject
       *
       * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
       *
       * @param {Array}
       * @return {Object}
       */
      let tupleToObject = function (arr) {
        let obj = {};
        obj.key = arr[0];
        obj.value = arr[1];
        return obj;
      };

      /* #tupleToObjectReverse
       *
       * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
       *
       * @param {Array}
       * @return {Object}
       */
      let tupleToObjectReverse = function (arr) {
        let obj = {};
        obj.value = arr[0];
        obj.key = arr[1];
        return obj;
      };

      /* #strToKeys
       *
       * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
       *
       * @param {Array}
       * @return {Object}
       */
      let strToKeys = function (arr) {
        let obj = {};
        for (i = 0; i < arr.length; i++) {
          obj.keys = arr;
          obj.values = 0;
        }
        return obj;
      };
      /* #getValues
       *
       * Takes in an object and returns an array of all the object's values.
       *
       * @param {Object}
       * @return {Array}
       */
      let getValues = function (obj) {
        return Object.values(obj);

      };

      /* #getKeys
       *
       * Takes in an object and returns an array of the object's keys.
       *
       * @param {Object}
       * @return {Array}
       */
      let getKeys = function (obj) {
        return Object.keys(obj);
      };

      /* #objectToArray
       *
       * Takes in an object and returns an array of tuples where each tuple has
       * the object's key as element 0 and object's value as element 1.
       *
       * @param {Object}
       * @return {Array}
       */
      let objectToArray = function (obj) {
        return Object.entries(obj);
      };

      /* #arrayToObject
       *
       * takes in an array and returns an object with keys set to the elements in the array and
       * all values set to false.
       *
       * @param {Array}*
       * @return { Object }
       */
      let arrayToObject = function (arr) {
        let obj = {};

        for (var i = 0; i < arr.length; i++) {
          console.log(arr[i]);
          obj[arr[i]] = false;
          console.log(obj);
        }
        return obj;
      };

      /* #arraysToObject
       *
       * takes in two arrays, the first array elements will be keys of an object and second array elements
       * will be values of an object.
       *
       * @param {Array}
       * @param {Array}
       * @return {Object}
       */
      let arraysToObject = function (arr1, arr2) {
        let obj = {};
        for (var i = 0; i < arr1.length; i++) {
          obj[arr1[i]] = arr2[i];
        }
        return obj;
      };



      /* #objectsToTuples
       *
       * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
       *
       * @param {Object}
       * @param {Object}
       * @return {Array}
       */

      let objectsToTuples = function (obj1, obj2) {
        arr1 = Object.entries(obj1);
        arr2 = Object.entries(obj2);
        arr3 = [];
        arr3.push(arr1, arr2)
        console.log(arr3);
        return arr3
      };


      //   arr1 = [];
      //   arr2 = [];
      //   arr3 = [];
      //   for(var key in obj1) {
      //     var value = obj1[key];
      //     arr1.push(value);
      //   }
      //   for(var key in obj2) {
      // var value = obj2[key];
      //     arr2.push(value);
      //   }
      //   arr3.push(arr1,arr2)
      //   return arr3;
    };

    /* #mapArrayValues
     *
     * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
     *
     * @param {Array}
     * @return {Object}
     */
    let mapArrayValues = function (arr) {
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
      }
      return obj;
    };


    /* #mapStringCounts
     *
     * takes in an array of strings and returns an object with key names set to the elements in the array.
     * If the character count of the key name is greater than or equal to 5 set the value to true,
     * otherwise set to false.
     *
     * @param {Array}
     * @return {Object}
     */
    let mapStringCounts = function (arr) {
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] >= 5) {
          Object.values(obj) = true;
        } else {
          Object.values(obj) = false;
        }
        return obj;
      }
    };
    /* #arrayToObjectNums
     *
     * takes in an array of numbers and returns an object with keys set to
     * each element of the array and all values set to true.
     *
     * @param {Array}
     * @return {Object}
     */
    let arrayToObjectNums = function (arr) {
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        result[arr[i]] = true;
      }
      return obj;
    };

    /* #stringToKeys
     *
     * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
     *
     * @param {String}
     * @return {Object}
     */
    let stringToKeys = function (str) {
      let result = {}
      let splitted = str.split('');
      for (var i = 0; i < splitted.length; i++) {
        result[splitted[i]] = true;
      }

      return result
    };

    /* #charCountMap
     *
     * takes in an array of strings and returns an object with keys set to each element of the array
     * and values set to the character count of each key name.
     *
     * @param {Array}
     * @return {Object}
     */
    let charCountMap = function (arr) {
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i].length;
      }
      return obj;
    };

    /* #frequencyMap
     *
     * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
     *
     * @param {String}
     * @return {Bool}
     */
    let frequencyMap = function (arr) {
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
          obj[arr[i]]++;
        } else {
          obj[arr[i]] = 1;
        }
      }
      return obj;
    };

    /* #tupleConvertToObject
     *
     * takes in an array of tuples and and returns an object whos keys are
     * the first element of the tuples and values are second element of the tuples.
     *
     * @param {String}
     * @return {Bool}
     */
    let tupleConvertToObject = function (arr) {
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
      }
      return obj;
    };

    module.exports = {
      doubleArray: doubleArray,
      sumArrays: sumArrays,
      stringCount: stringCount,
      arrayLength: arrayLength,
      countAll: countAll,
      countStrings: countStrings,
      countAllStrings: countAllStrings,
      convertToArray: convertToArray,
      objectSize: objectSize,
      createZeroFilledArray: createZeroFilledArray,
      poppedArray: poppedArray,
      splitString: splitString,
      lengthOfLast: lengthOfLast,
      sumBelowTen: sumBelowTen,
      moreThanTenLetters: moreThanTenLetters,
      multiplyAll: multiplyAll,
      getKeys: getKeys,
      sumAllPositive: sumAllPositive,
      stringCountBelowThree: stringCountBelowThree,
      countObjects: countObjects,
      getObjectKeys: getObjectKeys,
      getObjectValues: getObjectValues,
      makeObject: makeObject,
      makeObjectReverse: makeObjectReverse,
      tupleToObject: tupleToObject,
      tupleToObjectReverse: tupleToObjectReverse,
      strToKeys: strToKeys,
      getValues: getValues,
      getKeys: getKeys,
      objectToArray: objectToArray,
      arrayToObject: arrayToObject,
      arraysToObject: arraysToObject,
      objectsToTuples: objectsToTuples,
      mapArrayValues: mapArrayValues,
      mapStringCounts: mapStringCounts,
      arrayToObjectNums: arrayToObjectNums,
      stringToKeys: stringToKeys,
      charCountMap: charCountMap,
      frequencyMap: frequencyMap,
      tupleConvertToObject: tupleConvertToObject
    };