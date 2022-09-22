/**

- JavaScript 에서의 호이스팅 개념-

 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미함.
 var 로 선언한 변수의 경우 호이스팅 시 undefined 로 변수를 초기화 한다.

**/


console.log(num)
var num =2 

_________________________________________ 실행 결과 콘솔 
undefined 




// var 같은 경우 함수만 지역변수로 호이스팅이 되고, 나머지는 전역변수로 다 올려버린다.


function test() {
  var a=5 
}
console.log(a)

_________________________________________ 실행 결과 콘솔 ( error ) 

ReferenceError: a is not definedhttps://c66f3de1-1e1e-4643-aeaa-4ccc0a4f21a3.id.repl.co/script.js:4
at https://c66f3de1-1e1e-4643-aeaa-4ccc0a4f21a3.id.repl.co/script.js:4:13





/**

for 반복문 안에서 0~4까지 출력이 되고,

i를 넣고 콘솔창을 찍었을때 5가 출력되는 말이 안되는 경우가 생긴다. for 문 안에서 선언된 i 는 for 안에서만 실행되어야 하는 것이 정상이다.

**/

for(var i=0; i<5 ; i++){
  console.log(i)
}
console.log(i)

_________________________________________ 실행 결과 콘솔 
0
1
2
3
4
5


//  변수 이름을 한번 선언하면 서로 다른 값이 들어가지 못하는데, var로 선언하면 그게 가능한 말도 안되는 경우가 생김 

var a= 1 
console.log(a)
var a=2 
console.log(a)

_________________________________________ 실행 결과 콘솔 
1
2




// 결론 : 이러한 이유에서 상식적인 프로그래머의 입장에서 var 보다는 let 변수선언이 권장된다. 