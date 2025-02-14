import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate; 
const startBtn = document.querySelector(".button");

startBtn.disabled = true;

flatpickr("#datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    onClose(selectedDates) {
        if (selectedDates.length === 0) return;

        const selectedDate = selectedDates[0];
        const now = new Date();

        if (selectedDate < now) {
            window.alert("Please choose a date in the future");
            startBtn.disabled = true;
        } else {
            userSelectedDate = selectedDate;
            startBtn.disabled = false;
            console.log("Selected date:", userSelectedDate);
        }
    }
});


