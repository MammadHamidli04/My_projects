const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const userMonth = prompt("Enter Month: ");
const userDay = prompt("Enter Day: ");

if (userMonth.length == 0 || userDay.length == 0) {
  alert("Please enter both a month and a day");
} else if (isNaN(userMonth) || isNaN(userDay)) {
  alert("Both fields must be numbers");
  return;
} else {
  const currentYear = new Date().getFullYear();
  const birthDay = new Date(`${userMonth} ${userDay} ${currentYear} 00:00:00`);

  function updateCountDown() {
    const currentTime = new Date();
    const diff = birthDay - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h    : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  }
}

setInterval(updateCountDown, 500);
