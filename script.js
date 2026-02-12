const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const dateFormat = (e) => {
  return e <= 10 ? `0${e}` : e;
};

const updateCountDown = (d) => {
  const currentDate = new Date();
  const timeDifference = d - currentDate;
  //calculation
  const calcSecs = Math.floor(timeDifference / 1000) % 60;
  const calcMins = Math.floor(timeDifference / 1000 / 60) % 60;
  const calcHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  const calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  secs.innerText = dateFormat(calcSecs);
  mins.innerText = dateFormat(calcMins);
  hours.innerText = dateFormat(calcHours);
  days.innerText = dateFormat(calcDays);
};

const countDown = (t) => {
  setInterval(() => {
    updateCountDown(t);
  }, 1000);
};

const targetDate = new Date("Februry 14 2028 07:00");
countDown(targetDate);
