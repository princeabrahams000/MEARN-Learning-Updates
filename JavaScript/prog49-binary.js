arr = [10,11,12,3,2,4]

// 1) sort the given array in ascending order

// Algoritham
// get the search item
searchItem = 2
// initilize lower index and upper index
low = 0
up = arr.length - 1
isPresent = false
// sort the given array
arr.sort((a,b)=> a - b)
console.log(arr);

count = 0
// repeat the above statement untill the low and up value meet
while (low <= up) {
    count++
  // mid = low+up/2
  mid = Math.floor((low + up) / 2);

  // -mid = search item
  // item found the display
  if (arr[mid] == searchItem) {
    isPresent = true;
    break;
  }
  // -mid>searchitem
  // up=mid-1
  else if (arr[mid] > searchItem) {
    up = mid - 1;
  }
  // -mid<searchItem
  // low = mid + 1
  else {
    low = mid + 1;
  }
}

console.log(isPresent?'present':'not present');
console.log(count);