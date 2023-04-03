let items = {
  "item1": 1.5,
  "item2": 2.05,
  "item3": 3.50
};
console.log(items)

function usdToInr(items){
  const exchangeRate=80;
  let itemsInRupees=Object.fromEntries(Object.entries(items).map(([key,value])=>[key,value*exchangeRate]));
  return itemsInRupees;
}
console.log(usdToInr(items));

// +++++++++++++++++++*************++++++++++++++++++++\\

// let items={"one":1.5,"two":2.7,"three":5,"four":3};
// console.log(items);
// let er=80;
// let itemsInInr=Object.fromEntries(Object.entries(items).map(([key,val])=>{
//   return [key,val*er];
// }));
// console.log(itemsInInr);