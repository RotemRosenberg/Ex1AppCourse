class Duck {
  constructor(name, color, age, weight, image) {
    this.name = name;
    this.color = color;
    this.age = parseInt(age); // המרה למספר
    this.weight = parseFloat(weight); // המרה למספר
    this.image = image;
  }

  Quack() {
    const audioPath = "quacksound.wav";
    const playCount = 3; // מספר הפעמים שהסאונד יתנגן
    const delayBetweenPlays = 500; // הפרש הזמן בין השמעה להשמעה במילישניות

    // הפעלת הצליל 3 פעמים עם הפרש זמן
    for (let i = 1; i <= playCount; i++) {

      setTimeout(() => {
        const audio = new Audio(audioPath); // יצירת מופע חדש בכל השמעה
        audio.play();
      }, i * delayBetweenPlays);
    }
    return Math.floor(this.age * this.weight / 2);
  }
  Show() {
    return `
    <p><strong>Name:</strong> ${this.name}</p>
    <p><strong>Color:</strong> ${this.color}</p>
    <p><strong>Age:</strong> ${this.age} years</p>
    <p><strong>Weight:</strong> ${this.weight} kg</p>
    <img src="${this.image}" alt="Duck image" style="width:100px; height:auto;">
  `;
  }
}
let duck = null;

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // מניעת טעינה מחדש של הדף
  const name = document.getElementById("fname").value;
  const color = document.getElementById("fcolor").value;
  const age = document.getElementById("fage").value;
  const weight = document.getElementById("fweight").value;
  const image = document.getElementById("fimage").value;
  duck = new Duck(name, color, age, weight, image);
  console.log(duck);
  document.getElementById("form-container").style.display = "none";
  document.getElementById('duckTitle').innerText = name + " Duck";
  document.getElementById("duckBtn").style.display = "block";
});

function quackDuck() {
  let quackCount = duck.Quack();
  // הצגת ה-`alert` לאחר שכל הצלילים נוגנו
  setTimeout(() => {
    document.getElementById('duckInfo').innerHTML = ''
    const quackText = "Quack ".repeat(quackCount);
    document.getElementById('duckInfo').innerText = quackText;
  }, 2500);
}
function showDuck() {
  document.getElementById('duckInfo').innerHTML = '';
  document.getElementById('duckInfo').innerHTML = duck.Show();


}