/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

var array = [6,2,3,7,5,4,1];
function bubbleSort(numArray) {
    for(let j=0;j<numArray.length;j++) {
        for(let i = 0; i < numArray.length; i++) {
            if(numArray[i]>numArray[i+1]) {
                var temp = numArray[i];
                numArray[i] = [i+1];
                numArray[i+1] = temp;
            }
        }
    }      
    return numArray;
}
console.log(bubbleSort(array));

