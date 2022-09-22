// object 개념 
let company = {
  name:"company",
  size:200,
  category:"it"
}

console.log(company) 
console.log(company.size)
console.log(company.category)
console.log(company["size"])
company.name="academy" 
console.log(company)

/* 

Object {name: "academy", size: 200, category: "it"}
200
it
200
Object {name: "academy", size: 200, category: "it"}  

뒤에서 바뀐 것도 오브젝트를 출력하면 바뀌어있다. 
*/ 
company["name"]="company" 

/*

Object {name: "company", size: 200, category: "it"}
200
it
200
Object {name: "company", size: 200, category: "it"}

*/

let compList = [{name:"company1",size:"300",category:"bank"},{name:"company2",size:"210",category:"retail"},{name:"company3",size:"250",category:"undefined"}]

console.log(compList)
console.log("회사1은 :",compList[0])
console.log("회사1의 이름은 :",compList[0].name)




/* 

(3) [{…}, {…}, {…}]   --> 값이 다 나옴 repl.it이라 이렇게 출력됨 
회사1은 : Object {name: "company1", size: "300", category: "bank"}
회사1의 이름은 : company1

*/ 