class Clock {
  constructor(hours, minutes, seconds, country) {
    this.hours = parseInt(hours);
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds); // המרה למספר
    this.country = country;
  }

  converToSeconds() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds
  }

  show() {
    const pad = (number) => String(number).padStart(2, "0");
    return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
  }
}

const clocks = [];

document.getElementById("clockForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // שליפת הערכים מהטופס
  const country = document.getElementById("country").value;
  const hours = parseInt(document.getElementById("hours").value, 10);
  const minutes = parseInt(document.getElementById("minutes").value, 10);
  const seconds = parseInt(document.getElementById("seconds").value, 10);

  // יצירת אובייקט שעון והוספה למערך
  const clock = new Clock(hours, minutes, seconds, country);
  clocks.push(clock);

  // ניקוי שדות הטופס
  document.getElementById("clockForm").reset();

  // הצגת נתוני 5 שעונים
  if (clocks.length === 5) {
    displayClocks();
  }
  console.log(clocks)
});

function displayClocks() {
  //button change
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.style.cursor = "not-allowed";
//display clocks info
  const displayDiv = document.getElementById("clockInfo");
  displayDiv.innerHTML = ""; 

  clocks.forEach((clock) => {
    console.log(clock)
    const clockInfo = document.createElement("p");
    clockInfo.textContent = `${clock.country}: ${clock.show()} (${clock.converToSeconds()} seconds)`;
    displayDiv.appendChild(clockInfo);
  });
}