// add money feature
const validPin = 1234;
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)

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
document.getElementById('withdraw-btn').addEventListener("click", function(e){
    e.preventDefault();
    const addPin = parseInt(document.getElementById('add-pin').value)
    if (validPin !== addPin) {
        alert("Wrong Pin");
        return;
    }
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const updatedBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = updatedBalance;

    const agentNumber = document.getElementById('agent-number').value
    if (agentNumber.length < 11) {
        alert("Please provide a valid Account Number");
        return;
    }
    if (withdrawAmount > availableBalance) {
        alert("Insufficient Balance");
        return;
    }
    
})

// toogling feature
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})



