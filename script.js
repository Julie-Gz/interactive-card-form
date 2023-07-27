"use strict"
// Credit Card Information
const numberOnCreditCard = document.querySelector(".card-details__number");
const nameOnCreditCard = document.querySelector(".card-details__name");
const cvcOnCreditCard = document.querySelector(".card-back__cvc");
const expMonthOnCreditCard = document.querySelector(".month");
const expYearOnCreditCard = document.querySelector(".year");

// Error Messages
const creditNumberError = document.querySelector(".credit-number-error");
const expiryDateError = document.querySelector(".expiry-date-error");
const cvcError = document.querySelector(".cvc-error");

// Containers
const formContainer = document.querySelector(".form-container");
const successContainer = document.querySelector(".success-container");

// Inputs
const inputFields = document.querySelectorAll("input");

// Buttons
const confirmBtn = document.querySelector(".form-confirm-btn");
const continueBtn = document.querySelector(".continue-btn");

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


confirmBtn.addEventListener("click", function (e) {
    e.preventDefault();
    formvalidation(e);
});

continueBtn.addEventListener("click", function () {
    formContainer.style.display = "block";
    successContainer.style.display = "none";
})

// Functions
function success() {
    formContainer.style.display = "none";
    successContainer.style.display = "block";
}

function formvalidation(e) {
    let allFields = true;
    inputFields.forEach(i => {
        if (!i.checkValidity()) {
            i.classList.add('invalid');
            i.style.borderColor = "#ff5252";
            allFields = false;
            e.preventDefault();
        } else {
            i.style.borderColor = "#600594"
            i.classList.remove('invalid');
        }
    });

    if (allFields) {
        success();
    } else {
        e.preventDefault();
    }
}
