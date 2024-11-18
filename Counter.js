class Counter {
  constructor(count) {
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
  let inputValue = document.getElementById('numInput').value;
  if (inputValue) {
      counter.initialize(parseInt(inputValue));
      document.getElementById('numInput').value = inputValue;
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