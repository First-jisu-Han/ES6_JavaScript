// js ans 
for (let i = 1; i <= 50; i++) {
  let StringVal = i.toString()
  console.log(getAns(StringVal))
}

function getAns(num) {
  result = ""
  flag=0
  for (let j = 0; j < num.length; j++) {
    if (num[j] == "3" || num[j] == "6" || num[j] == "9") {
      result += "짝"
      flag+=1
  }}
  if(flag==0){
    return num
  } else {
    return result
  }
  }
