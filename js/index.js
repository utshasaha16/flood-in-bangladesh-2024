// input-field-one
document
  .getElementById("input-btn-one")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValue("input-field-one");

    if (addMoney <= 0 || isNaN(addMoney)) {
      alert('Invalid Donate Amount')
      return;
    }

    const inputOneTotalAmount = getTextFieldValue("input-one-total-amount");
    const totalAmount = addMoney + inputOneTotalAmount;
    document.getElementById("input-one-total-amount").innerText = totalAmount;

    const mainTotalBalance = getTextFieldValue("main-balance");
    const mainBalance = mainTotalBalance - addMoney;
    document.getElementById("main-balance").innerText = mainBalance;
    // added history entry
    const historyItem = document.createElement('div');
    historyItem.className ='bg-white p-4 round-md border text-center';
    historyItem.innerHTML =`
    <p class="text-xl font-bold">${addMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
    <p class="text-sm font-normal">${new Date(). toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);

    // modal open
    document.getElementById('my_modal_1').showModal();
  });
  // input-field-two
document
.getElementById("input-btn-two")
.addEventListener("click", function (event) {
  event.preventDefault();
  const addMoneyInputTwo = getInputFieldValue("input-field-two");
  if (addMoneyInputTwo <= 0 || isNaN(addMoneyInputTwo)) {
    alert('Invalid Donate Amount');
    return;
  }

  const inputTwoTotalAmount = getTextFieldValue("input-two-total-amount");
  const accountBalance = addMoneyInputTwo + inputTwoTotalAmount;

  document.getElementById("input-two-total-amount").innerText =
    accountBalance;

  const mainTotalBalance = getTextFieldValue("main-balance");
  const mainBalance = mainTotalBalance - addMoneyInputTwo;
  document.getElementById("main-balance").innerText = mainBalance;
  // added history entry
  const historyItem = document.createElement('div');
  historyItem.className ='bg-white p-4  border text-center';
  historyItem.innerHTML =`
  <p class="text-xl font-bold">${addMoneyInputTwo} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
  <p class="text-sm font-normal">${new Date(). toLocaleDateString()}</p>
  `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyItem,historyContainer.firstChild);

 // modal open
    document.getElementById('my_modal_1').showModal();
});
// input-field-three
document
.getElementById("input-btn-three")
.addEventListener("click", function (event) {
  event.preventDefault();
  const addMoneyInputThree = getInputFieldValue("input-field-three");

  if (addMoneyInputThree <= 0 || isNaN(addMoneyInputThree)) {
    alert('Invalid Donate Amount');
    return;
  }

  const cardOneTotalAmount = getTextFieldValue("card-three-total-amount");
  const cardThreeAccountBalance = addMoneyInputThree + cardOneTotalAmount;

  document.getElementById("card-three-total-amount").innerText =
    cardThreeAccountBalance;

  const mainTotalBalance = getTextFieldValue("main-balance");
  const mainBalance = mainTotalBalance - addMoneyInputThree;
  document.getElementById("main-balance").innerText = mainBalance;
// added history entry
const historyItem = document.createElement('div');
historyItem.className ='bg-white p-4  border text-center';
historyItem.innerHTML =`
<p class="text-xl font-bold">${addMoneyInputThree} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
<p class="text-sm font-normal">${new Date(). toLocaleDateString()}</p>
`
const historyContainer = document.getElementById('history-section');
historyContainer.insertBefore(historyItem,historyContainer.firstChild);

 // modal open
 document.getElementById('my_modal_1').showModal();
});

// history button
const historyBtn = document.getElementById("history-btn");


historyBtn.addEventListener("click", function () {
historyBtn.classList.add("bg-primary");
donationBtn.classList.remove("bg-primary");
donationBtn.classList.add("bg-gray-100");


// hide donation section
document.getElementById("donation-section").classList.add("hidden");
document.getElementById('history-section').classList.remove('hidden');
});
// donation button
const donationBtn = document.getElementById("donation-btn");
donationBtn.addEventListener("click", function () {

  historyBtn.classList.remove("bg-primary");
donationBtn.classList.add("bg-primary");
historyBtn.classList.add("bg-gray-100");


// hide donation section
document.getElementById("donation-section").classList.remove("hidden");
document.getElementById('history-section').classList.add('hidden');
});

// redirect another page
document.getElementById('blog-button')
  .addEventListener('click', function(){
    window.location.href = './home.html'
});
// redirect another page
// document.getElementById('home-button')
//   .addEventListener('click', function(){
//     window.location.href = './index.html'
// })