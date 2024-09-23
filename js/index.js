// input-field-one
document
  .getElementById("input-btn-one")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValue("input-field-one");

    if (addMoney <= 0 || isNaN(addMoney)) {
      alert('invalid number')
      return;
    }

    const inputOneTotalAmount = getTextFieldValue("input-one-total-amount");
    const totalAmount = addMoney + inputOneTotalAmount;
    document.getElementById("input-one-total-amount").innerText = totalAmount;

    const mainTotalBalance = getTextFieldValue("main-balance");
    const mainBalance = mainTotalBalance - addMoney;
    document.getElementById("main-balance").innerText = mainBalance;
  });
  // input-field-two
document
.getElementById("input-btn-two")
.addEventListener("click", function (event) {
  event.preventDefault();
  const addMoneyInputTwo = getInputFieldValue("input-field-two");
  if (addMoneyInputTwo <= 0 || isNaN(addMoneyInputTwo)) {
    alert('invalid number');
    return;
  }

  const inputTwoTotalAmount = getTextFieldValue("input-two-total-amount");
  const accountBalance = addMoneyInputTwo + inputTwoTotalAmount;

  document.getElementById("input-two-total-amount").innerText =
    accountBalance;

  const mainTotalBalance = getTextFieldValue("main-balance");
  const mainBalance = mainTotalBalance - addMoneyInputTwo;
  document.getElementById("main-balance").innerText = mainBalance;
});
// input-field-three
document
.getElementById("input-btn-three")
.addEventListener("click", function (event) {
  event.preventDefault();
  const addMoneyInputThree = getInputFieldValue("input-field-three");

  if (addMoneyInputThree <= 0 || isNaN(addMoneyInputThree)) {
    alert('invalid number');
    return;
  }

  const cardOneTotalAmount = getTextFieldValue("card-three-total-amount");
  const cardThreeAccountBalance = addMoneyInputThree + cardOneTotalAmount;

  document.getElementById("card-three-total-amount").innerText =
    cardThreeAccountBalance;

  const mainTotalBalance = getTextFieldValue("main-balance");
  const mainBalance = mainTotalBalance - addMoneyInputThree;
  document.getElementById("main-balance").innerText = mainBalance;
});


// history button
const historyBtn = document.getElementById("history-btn");

historyBtn.addEventListener("click", function () {
historyBtn.classList.add("bg-primary");
donationBtn.classList.remove("bg-primary");
donationBtn.classList.add("bg-gray-100");

// hide donation section
document.getElementById("donation-section").classList.add("hidden");
});
// donation button
const donationBtn = document.getElementById("donation-btn");
donationBtn.addEventListener("click", function () {

  historyBtn.classList.remove("bg-primary");
donationBtn.classList.add("bg-primary");
historyBtn.classList.add("bg-gray-100");


// hide donation section
document.getElementById("donation-section").classList.remove("hidden");
});