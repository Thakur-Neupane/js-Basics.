// JS specific array loops
// For of Loop
// const fruits=["apple","banana","strawberry","pineapple",];
// console.log(fruits);
// const upperFruits=[];
// for(let item of fruits){
//   upperFruits.push(item.toUpperCase());
//   console.log(upperFruits);
// }

// for (let i=0; i<fruits.length; i++){
// console.log(i, fruits[i]);
// }

// For each loop
// fruits.forEach((fruit, index)=>{
// console.log(index, fruit);
// return ( "I love " + item.toLocaleUpperCase());
// });
// console.log(newArg);
// // });

// Map method
// const newArg=fruits.map((item, i)=>{
// console.log(item, i);
// return ( "I love " + item.toLocaleUpperCase());
// });
// console.log(newArg);



// Filter method
// const newData= fruits.filter((item,i)=>{
//   return item.includes("n")
// });
// console.log(newData);


// Reduce method
// const money =[12, 44, 45,676,656,65464,4546,54,6,5654,56,56,6,6556,656,56];
// const total = money.reduce((subTtl, item)=>{
// return subTtl + item;
// }, 10)
// console.log(total);

// Every
// const result= fruits.every((item)=>{
//   return item.includes("a");
// });
// console.log(result);

// const Arg = new Array(50).fill( "💕");
// console.log(Arg);

// Challenge -01
// 1. create array of 50 random numbers.
const arg=[]
for(let i=0; i<50; i++){
  const num = Math.ceil (Math.random()*100);
  arg.push(num);
}

arg.sort((a,b) =>{
  return (b-a);
})
console.log(arg);
const ttl=arg.reduce((acc, num)=>{
  return acc+num }, 0);
console.log(ttl);

const evenArg=arg.filter((item)=>item % 2===0);
const oddArg=arg.filter((item )=>item%2===1);
console.log(evenArg);
console.log(oddArg);



// const uniqueArg = [...new Set(arg)];
for(let i=0; i<arg.length; i++){
  if (!uniqueArg.includes(arg[i])){
uniqueArg.push(arg[i]);
  }
}
console.log(uniqueArg);