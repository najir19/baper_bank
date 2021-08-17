let balanceBox = document.getElementById("balance-box");
let depositBox = document.getElementById('deposit-box');
let depositInput = document.getElementById('deposit-input');
let deposit_btn = document.getElementById('deposit_btn');
let withdrawBox = document.getElementById('withdraw-box');
let withdrawInput = document.getElementById('withdraw-input');
let withdrawBtn = document.getElementById('withdraw-btn');

function updateBox(boxId, inputId) {
    let getInputNum = parseFloat(inputId.value);
    let getBoxNUm = parseFloat(boxId.innerText);
    let totalBox = getInputNum + getBoxNUm;
    boxId.innerText = totalBox;
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
        balanceBox.innerText = totalBalance;
        inputId.value = "";
    }
}