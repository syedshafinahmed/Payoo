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


function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}


// function setInnerText(){
//     const availableBalanceElement = document.getElementById("available-balance")
//     availableBalanceElement.innerText = value
// }


function setInnerText(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
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


    const availableBalance = getInnerText("available-balance")

    if (accountNumber.length < 11) {
        alert("Please provide a valid Account Number");
        return;
    }

    const newAvailableBalance = availableBalance + addAmount

    // document.getElementById("available-balance").innerText = 
    // setInnerText("newAvailableBalance")
    // setInnerText(newAvailableBalance)
    setInnerText("available-balance", newAvailableBalance);


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
    const availableBalance = getInnerText("available-balance")
    const updatedBalance = availableBalance - withdrawAmount;
    // document.getElementById("available-balance").innerText = ;
    // setInnerText(updatedBalance)
    setInnerText("available-balance", updatedBalance);




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
    


    const transferAmount = getInputValue("transfer-amount")
    const availableBalance = getInnerText("available-balance")



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
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("get-bonus-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
    // document.getElementById("pay-bill-parent").style.display = "none"
    // document.getElementById("add-money-parent").style.display = "block"


    const forms = this.getElementsByClassName("form")
    for (const form of forms){
        form.style.display = "none"
    }
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("get-bonus-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
    // document.getElementById("pay-bill-parent").style.display = "none"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById("cash-out-parent").style.display = "block"
})

document.getElementById("transfer-money-button").addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("get-bonus-parent").style.display = "none"
    // document.getElementById("pay-bill-parent").style.display = "none"
    // document.getElementById("cash-out-parent").style.display = "none"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById("transfer-money-parent").style.display = "block"
})

document.getElementById("pay-bill-button").addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("get-bonus-parent").style.display = "none"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById("pay-bill-parent").style.display = "block"
})

document.getElementById("get-bonus-button").addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("pay-bill-parent").style.display = "none"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById("get-bonus-parent").style.display = "block"
})



