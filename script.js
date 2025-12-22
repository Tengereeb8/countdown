const showDate = document.querySelector(".date");
const date = new Date();
let year = date.getFullYear();
showDate.innerHTML = year;
