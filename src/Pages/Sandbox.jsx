import React, { useEffect } from 'react'

const SandBox = () => {
  const reverseString = (s) => {
    if (s.length > 1) {
      console.log(s.reverse())
      return
    }
    console.log(s, 'fired')
  }

  useEffect(() => {
    reverseString(['h', 'e', 'l', 'l', 'o'])
  }, [])
  return <div></div>
}

export default SandBox

const removeDuplicates = (nums) => {
  nums.sort((a, b) => a - b)
  let newArr = [...new Set(nums)]
  // Set nums creates a new set object from nums array. sets only store unique values
  // the spread syntax '...' spreads elements of Set object into new array
  // and the new array is assigned to the variable newArr

  return console.log(newArr)
}

const rotateArray = (arr, rotationAmount) => {
  for (let i = 0; i < rotationAmount; i++) {
    arr.push(arr.shift())
  }
  //shift removes and returns first element in an array
  // push adds that element to the end of the array
  console.log(arr)
}

const isIsogram = (nums) => {
  // const set = new Set(nums)
  // console.log(set.length === nums.length)

  // do the top one first its better. so much better!

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      console.log(true)
      return
    }
  }
  console.log(false)
}

const findSingleNumber = (nums) => {
  let result
  for (let num of nums) {
    result ^= num
  }
  console.log(result)
  // The XOR operation (^) between two numbers returns 1 if the corresponding bits are different, and 0 if they are the same.
  // Since all elements appear twice except for one, the XOR operation will cancel out the pairs, leaving only the single element that does not have a duplicate.
  // After iterating through the entire array, result will contain the value of the single element that appears only once.

  // nums.sort((a, b) => a - b)

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
  //     console.log(nums[i])
  //     return
  //   }
  // }
  //this works
}

const intersectionOfTwoArrays = (num1, num2) => {
  const frequency = {}
  const intersection = []

  for (let num of num1) {
    frequency[num] = (frequency[num] || 0) + 1
  }

  for (let num of num2) {
    if (frequency[num] && frequency[num] > 0) {
      intersection.push(num)
      frequency[num]--
    }
  }
  console.log(intersection)

  // Create an empty hashmap/object called frequency to store the frequency of elements.
  // Iterate through nums1 and count the frequency of each element by updating the corresponding key in the frequency object. If the element does not exist in the object, initialize it with a frequency of 1. If it already exists, increment its frequency by 1.
  // Iterate through nums2 and check if each element exists in the frequency object. If it does and its frequency is greater than 0, add it to the intersection array and decrement its frequency by 1 in the frequency object.
  // Finally, return the intersection array, which contains the common elements with their frequencies preserved.
}

const increaseLastDigit = (array) => {
  let n = array.length
  array[n - 1] += 1
  console.log(array)

  // const n = digits.length

  // Iterate from the least significant digit to the most significant digit
  // for (let i = n - 1; i >= 0; i--) {
  // Increment the current digit by 1
  // digits[i]++;

  // If the current digit becomes 10, set it to 0 and carry over the 1 to the next digit
  // if (digits[i] === 10) {
  // digits[i] = 0;
  // } else {
  // If the current digit is less than 10, no need for further carrying
  // return digits;
  // }
  // }

  // If the loop completes, it means all digits were 9's and got converted to 0's,
  // so we need to add an additional digit 1 at the beginning of the array
  // digits.unshift(1);

  // return digits;

  // AIs solution
}

{
  /* <Candidate
  name={'Robert Ciaccio'}
  title={'Lead Mobile Developer'}
  experience={'6 years'}
/> */
}
