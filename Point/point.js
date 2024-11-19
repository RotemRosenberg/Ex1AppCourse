class Point{
  constructor(x,y){
    this.x=parseFloat(x);
    this.y=parseFloat(y);
  }
  show(){
    return "("+this.x+","+this.y+")";
  }
  equals(p){
    if(p.x===this.x && p.y===this.y)
      return true; 
    else 
    return false;
  }
}

function findPoint(arrPoints,x,y){
  for(let i=0;i<arrPoints.length;i++){
    if(arrPoints[i].x===x&&arrPoints[i].y===y){
      return true;
    }
  }
  return false;

}
const points1 = [new Point(1, 2), new Point(3, 4), new Point(5, 6)];
console.log(findPoint(points1, 3, 4)); // אמת
console.log(findPoint(points1, 7, 8)); // שקר

function checkPointInArray(arrPoints,point){
  for(let i=0;i<arrPoints.length;i++){
    if(arrPoints[i].equals(point)){
      return true;
    }
  }
  return false;
}

const points2 = [new Point(1, 2), new Point(3, 4), new Point(5, 6)];
console.log(checkPointInArray(points2, new Point(3, 4))); // אמת
console.log(checkPointInArray(points2, new Point(7, 8))); // שקר

function calculateLegth(arrPoints){
  let totalLength =0;
  for(let i=0;i<arrPoints.length-1;i++){
   let dx=arrPoints[i+1].x-arrPoints[i].x;
   let dy=arrPoints[i+1].y-arrPoints[i].y;
   totalLength+=Math.sqrt(dx*dx+dy*dy);
  }
  return totalLength;
}

function displayLength(){
  const route = [
    new Point(0, 7),
    new Point(1.5, 3),
    new Point(2,7),
    new Point(4,9),
    new Point(5,15)
  ];
  const result=calculateLegth(route);
  console.log(result)
  document.getElementById('resultLength').innerHTML=`Total Distance: ${result} units`;
}
displayLength()


const xValues = [0,1.5,2,4,5];
const yValues = [7,3,4.7,9,15];
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:16}}],
    }
  }
});