let delayInSecond=3;
let remainingTime=delayInSecond;
let intervalId=setInterval(()=>{
  console.log(`Genrating Random Number in ${remainingTime} Seconds..`);
  remainingTime--;
  if(remainingTime<0){
    clearInterval(intervalId);
    let randomNumber=Math.ceil(Math.random()*1000);
    console.log(`Random Number is : ${randomNumber}`)
  }

},1000);
