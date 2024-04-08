// JS specific array loops
// For of Loop
const fruits=["apple","banana","strawberry","pineapple",];
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
const result= fruits.every((item)=>{
  return item.includes("a");
});
console.log(result);