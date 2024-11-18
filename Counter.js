class Counter {
  constructor() {
  this.count=0;
  }

  initialize(num){
    this.count=num;

  }
  increment(){
    this.count++;
  }
  go(){
    let countPrint =[];
    for (let i=0;i<=this.count;i++){
      countPrint.push(i);
    }
    return countPrint;
  }
}
let counter = new Counter();

function startCounter() {
  let inputCount = document.getElementById('numInput').value;
  if (inputCount) {
      counter.initialize(parseInt(inputCount));
      document.getElementById('numInput').value = inputCount;
      console.log(counter)
   } 
   else  {
    alert("Please enter a number");
      }
  }

function plusOne(){
  counter.increment();
  document.getElementById('numInput').value=counter.count;
  console.log(counter)

}
function printNumbers(){
  document.getElementById("numberPrint").innerText='';
  let printNumbers = counter.go();
  console.log(printNumbers)
  document.getElementById("numberPrint").innerHTML="Numbers: " + printNumbers;
}