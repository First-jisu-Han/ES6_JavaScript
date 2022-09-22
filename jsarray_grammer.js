let array = [1,2,3,4,5,6,7] 

console.log(array)

array.pop() // array에 영향 
console.log(array)
array.push(8) // array 에 영향 
console.log(array.includes(1))  // 포함하는지 안하는지 확인 


console.log(array.indexOf(3))  // 해당 value가 몇번째에 있는지 

console.log(array.slice(1,3)) // 기존 배열에 영향 X  
array.splice(0,2) // 배열 0부터 1 인덱스까지를 자르고 영향 
console.log(array) 
array.push(8,2,3) 

/*

출력------------------------------------------------------------------------
(8) [3, 4, 5, 6, 8, 8, 2, 3]
(8) [3, 4, 5, 6, 8, 8, 2, 3]
true
2
(2) [2, 3]
(8) [3, 4, 5, 6, 8, 8, 2, 3]

*/