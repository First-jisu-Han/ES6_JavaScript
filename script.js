// 3항 연산 java 와 동일 
let num =1
let isTrue = num >0 ? "True" : False
console.log(isTrue)


// 4번 문항 소수구하기 풀기 
let input= 208

if(input==1){
  console.log("1")
}
for(let i=2;i<input;i++){
  if(input%i ==0){
    console.log("Not Prime Number") 
    break
  } 
  console.log("Prime Number")
}

// 다른버전으로 푼 소수구하기 
let inputNum =208

function isPrime(number){
  if(number==1) return 1
  for(let i=2;i<number;i++){
    if(i%number==0){
      return false
    }
    return true
  } 
}

console.log(isPrime(inputNum))

// 소수 정답지 
let n =11
let isPrime = true

if (n ===1){
    isPrime = false
}
for(let i=2;i<n;i++){
  if(n % i == 0){
    isPrime =  false 
  }
}
console.log(isPrime)
