let balanceBox = document.getElementById("balance-box");
let depositBox = document.getElementById('deposit-box');
let depositInput = document.getElementById('deposit-input');
let deposit_btn = document.getElementById('deposit_btn');
let withdrawBox = document.getElementById('withdraw-box');
let withdrawInput = document.getElementById('withdraw-input');
let withdrawBtn = document.getElementById('withdraw-btn');

// deposite

deposit_btn.addEventListener('click', function () {
    // let depositeInputValueNum = parseFloat(depositInput.value); 
    // let depositeBoxNum = parseFloat(depositBox.innerText);
    // depositBox.innerText = depositeInputValueNum + depositeBoxNum;
    updateBox(depositBox, depositInput);

    // let getBalancePreValue = parseFloat(balanceBox.innerText);
    // let totalBalance = depositeInputValueNum + getBalancePreValue;
    // balanceBox.innerText = totalBalance;
    // depositInput.value = "";
    updateBalance(depositInput, true);
})

//withdraw
withdrawBtn.addEventListener('click', function () {
    // let getWithdrawInputValue = parseFloat(withdrawInput.value);
    // let getValueOfWithdrawBox = parseFloat(withdrawBox.innerText);
    // let totalWithdraw = getWithdrawInputValue + getValueOfWithdrawBox; 
    // withdrawBox.innerText = totalWithdraw;
    updateBox(withdrawBox, withdrawInput);
    updateBalance(withdrawInput, false);

    // let getBalanceValue = parseFloat(balanceBox.innerText);
    // let totalBalance = getBalanceValue - getWithdrawInputValue;

    // balanceBox.innerText = totalBalance;
    // withdrawInput.value = "";

});
function updateBox(boxId, inputId) {
    let getWithdrawInputValue = parseFloat(inputId.value);
    let getValueOfWithdrawBox = parseFloat(boxId.innerText);
    let totalWithdraw = getWithdrawInputValue + getValueOfWithdrawBox;
    boxId.innerText = totalWithdraw;

}
function updateBalance(inputId, calculate) {
    if (calculate == true) {
        let totalBalance = parseFloat(inputId.value) + parseFloat(balanceBox.innerText);
        console.log(inputId.value)
        balanceBox.innerText = totalBalance;
        inputId.value = "";
    }
    else if (calculate == false) {
        let totalBalance = parseFloat(balanceBox.innerText) - parseFloat(inputId.value);
        console.log(inputId.value)
        balanceBox.innerText = totalBalance;
        inputId.value = "";
    }

}