"use strict"
// Credit Card Input
const creditCardNumber = document.querySelector("#card-holder-number");
const numberOnCreditCard = document.querySelector(".card-details__number");

const creditCardHolder = document.querySelector("#card-holder-name");
const nameOnCreditCard = document.querySelector(".card-details__name");

const creditCardCVC = document.querySelector("#cvc");
const cvcOnCreditCard = document.querySelector(".card-back__cvc");

const creditCardExpMonth = document.querySelector("#month");
const expMonthOnCreditCard = document.querySelector(".month");

const creditCardExpYear = document.querySelector("#year");
const expYearOnCreditCard = document.querySelector(".year");

// Error Messages
const creditNumberError = document.querySelector(".credit-number-error");
const expiryDateError = document.querySelector(".expiry-date-error");
const cvcError = document.querySelector("cvc-error");

// Containers
const form = document.querySelector(".form-container");
const successWindow = document.querySelector(".success-container");

// Inputs
const inputFields = document.querySelectorAll("input");

// Confirm Button
const confirmBtn = document.querySelector(".confirm");

//Event Listeners
inputFields.forEach(i => {
    i.addEventListener("input", function () {
        if (i.id == "card-holder-name") {
            nameOnCreditCard.textContent = i.value;
        } else if (i.id == "card-holder-number") {
            let value = i.value;

            value = value.replace(/\D/g, "");

            value = value.replace(/(\d{4})/g, "$1 ").trim();

            i.value = value;
            numberOnCreditCard.textContent = value;

            if (i.validity.valid) {
                i.setAttribute("aria-invalid", "false");
                i.classList.remove("invalid");
            } else {
                i.setAttribute("aria-invalid", "true");
                i.classList.add("invalid");
            }


        } else if (i.id == "month") {
            expMonthOnCreditCard.textContent = i.value;
            if (i.validity.valid) {
                i.setAttribute("aria-invalid", "false");
                i.classList.remove("invalid");
            } else {
                i.setAttribute("aria-invalid", "true");
                i.classList.add("invalid");
            }
        } else if (i.id == "year") {
            expYearOnCreditCard.textContent = i.value;
            if (i.validity.valid) {
                i.setAttribute("aria-invalid", "false");
                i.classList.remove("invalid");
            } else {
                i.setAttribute("aria-invalid", "true");
                i.classList.add("invalid");
            }
        } else if (i.id == "cvc") {
            cvcOnCreditCard.textContent = i.value;
            if (i.validity.valid) {
                i.setAttribute("aria-invalid", "false");
                i.classList.remove("invalid");
            } else {
                i.setAttribute("aria-invalid", "true");
                i.classList.add("invalid");
            }
        }
    });
});

form.addEventListener("submit", formvalidation);

// Functions
function success() {
    form.style.display = "none";
    successWindow.style.display = "block";
}

function formvalidation(e) {
    let inputs = form.querySelector("input");

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            input.style.borderColor = "#ff5252";
            e.preventDefault();
        } else {
            input.classList.remove('invalid');
            success();
        }
    });
}
