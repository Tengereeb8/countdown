// const yearShow = document.querySelector(".year");
// const monthShow = document.querySelector(".month");
// con
// const dayShow = document.querySelector(".day");
// const hourShow = document.querySelector(".hour");
// const minuteShow = document.querySelector(".minute");
// const secondShow = document.querySelector(".seconds");
// const date = new Date();
// let year = date.getFullYear();
// yearShow.innerHTML = year;
// let month = date.getMonth();
// monthShow.innerHTML = month;
// let day = date.getDay();
// let hour = date.getHours();
// let minute = date.getMinutes();
// let seconds = date.getSeconds();
// dayShow.innerHTML = day;
// hourShow.innerHTML = hour;
// minuteShow.innerHTML = minute;
// secondShow.innerHTML = seconds;
const dayShow = document.querySelector(".day");
const hourShow = document.querySelector(".hour");
const minuteShow = document.querySelector(".minute");
const secondShow = document.querySelector(".seconds");

const targetDate = new Date(2026, 7, 27);

setInterval(() => {
  const now = new Date();
  let diff = targetDate - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff = diff % (1000 * 60 * 60 * 24);

  let hours = Math.floor(diff / (1000 * 60 * 60));
  diff = diff % (1000 * 60 * 60);

  let minutes = Math.floor(diff / (1000 * 60));
  diff = diff % (1000 * 60);

  let seconds = Math.floor(diff / 1000);

  dayShow.innerHTML = days;
  hourShow.innerHTML = hours;
  minuteShow.innerHTML = minutes;
  secondShow.innerHTML = seconds;
}, 1000);
