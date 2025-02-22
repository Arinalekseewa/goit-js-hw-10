import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.querySelector(".delay-input");
const fulfilledBtn = document.querySelector('input[value="fulfilled"]');
const rejectedBtn = document.querySelector('input[value="rejected"]');

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const delay = parseInt(input.value, 10);
    const isFulfilled = fulfilledBtn.checked;
    const isRejected = rejectedBtn.checked;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFulfilled) { 
                resolve(delay);
            } else if (isRejected) { 
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`, 
                backgroundColor: "#59A10D",
                position: "topRight",
            });
        })
        .catch((delay) => {
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`, 
                backgroundColor: "#EF4040",
                position: "topRight",
            });
        });
});
