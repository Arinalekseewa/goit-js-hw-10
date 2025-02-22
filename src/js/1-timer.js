import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate; 

const startBtn = document.querySelector(`[data-start]`);
const input = document.querySelector(`#datetime-picker`);
const dataDays = document.querySelector(`[data-days]`);
const dataHours = document.querySelector(`[data-hours]`);
const dataMins = document.querySelector(`[data-minutes]`);
const dataSecs = document.querySelector(`[data-seconds]`);

startBtn.disabled = true;

flatpickr("#datetime-picker", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  defaultDate: new Date(),
  minuteIncrement: 1,
  time_24hr: true,
  locale: {
    firstDayOfWeek: 1
  },
  onClose(selectedDates) {
    if (selectedDates.length === 0) return;

    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate < now) {
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#FFFFFF',
        iconColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
});
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
      console.log("Обрана дата:", userSelectedDate);
    }
  },
});

startBtn.addEventListener("click", () => { 
  timer.start();
  startBtn.disabled = true; 
  input.disabled = true;
});

const timer = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const diff = userSelectedDate - currentTime;

      if (diff <= 0) {
        clearInterval(this.intervalId);
        startBtn.disabled = false; 
        input.disabled = false;
        return;
      }

      const time = getTimeComponents(diff);
      updateUI(time); 
    }, 1000);
  },
};

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateUI({ days, hours, mins, secs }) {
  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMins.textContent = mins;
  dataSecs.textContent = secs;
}


