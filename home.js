const validPin = 1234;

// function to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}


function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}



// add money feature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValue('bank')
    const accountNumber =  getInputValue("account-number")
    const addAmount = getInputValueNumber('add-amount')
    const addPin = getInputValueNumber('add-pin')

    if (validPin !== addPin) {
        alert("Wrong Pin");
        return;
    }


    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (accountNumber.length < 11) {
        alert("Please provide a valid Account Number");
        return;
    }

    const newAvailableBalance = availableBalance + addAmount

    document.getElementById("available-balance").innerText = newAvailableBalance


})


// cashout money feature
document.getElementById('withdraw-btn').addEventListener("click", function (e) {
    e.preventDefault();
    // const addPin = parseInt(document.getElementById('add-pin').value)
    // if (validPin !== addPin) {
    //     alert("Wrong Pin");
    //     return;
    // }
    const withdrawAmount = getInputValueNumber("withdraw-amount")
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const updatedBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = updatedBalance;

    const agentNumber = getInputValue('agent-number')
    if (agentNumber.length < 11) {
        alert("Please provide a valid Account Number");
        return;
    }
    if (withdrawAmount > availableBalance) {
        alert("Insufficient Balance");
        return;
    }

})


// transfer money feature
document.getElementById('transfer-btn').addEventListener("click", function (e) {
    e.preventDefault();
    


    const transferAmount = parseInt(document.getElementById("transfer-amount").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)



    const transferMoneyNumber = document.getElementById('transfer-money-number').value
    if (transferMoneyNumber.length < 11) {
        alert("Please provide a valid Account Number");
        return;
    }
    if (transferAmount > availableBalance) {
        alert("Insufficient Balance");
        return;
    }


    // const valPin = "1234"; 
    // const addPin = (document.getElementById('add-pin').value.trim())

    // // if (valPin !== addPin) {
    // //     alert("Wrong Pin");
    // //     return;
    // // }

    alert("Transfer Successful!");


    // const addPin = parseInt(document.getElementById('add-pin').value)
    // if(addPin !== validPin){
    //     alert("Wrong Pin!");
    //     return;
    // }
})

// toogling feature
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})

document.getElementById("transfer-money-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "block"
})

document.getElementById("pay-bill-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "block"
})

document.getElementById("get-bonus-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "block"
})



