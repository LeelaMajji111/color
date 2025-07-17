
let username=prompt("Hi!Enter Your Name");

function updateClock() {
  const d = new Date();

  // ⿡ Get full 24-hour time for greeting
  const fullHour = d.getHours();

  // ⿢ Get minutes and seconds
  let min = d.getMinutes();
  let sec = d.getSeconds();

  // ⿣ Determine AM/PM
  let ampm = fullHour>= 12 ? "PM" : "AM";

  // ⿤ Convert 24-hour to 12-hour
  let hrs = fullHour % 12;
  hrs = hrs === 0 ? 12 : hrs;

  // ⿥ Add 0 before single digits
  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // ⿦ Greeting based on original 24-hour time
  let greeting = "";
  if (fullHour >= 5 && fullHour < 12) {
    document.body.style.background="linear-gradient(#FFFAE5,#FFE5B4)";
    greeting = `Good Morning🌞,${username || "Guest"}!`;
  }
   else if (fullHour >= 12 && fullHour < 17) {
    document.body.style.background="linear-gradient(#FFF8DC,#FFD700)";
    greeting = `Good Afternoon,${username || "Guest"}!`;
  } else if (fullHour >= 17 && fullHour < 21) {
   greeting = `Good Evening♨,${username || "Guest"}!`; 
   document.body.style.background="linear-gradient(to right,#f3904f,#fad0c4)";
   document.getElementById("date").style.color="black";
  }
   else {
    greeting = `Good Night🌙,${username || "Guest"}!`; 
    document.body.style.background="linear-gradient(#0000428,#004e92)";
  }

  // ⿧ Display time
  const time = `${hrs}:${min}:${sec} ${ampm}`;
  document.getElementById("clock").textContent = time;

  // ⿨ Display date
  const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };
  const date = d.toLocaleDateString("en-US", options);
  document.getElementById("date").textContent = date;

  // ⿩ Display greeting
  document.getElementById("greeting").textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();