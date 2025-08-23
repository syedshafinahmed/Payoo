const validPin = 1234;
document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)


    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length < 11){
        alert("Please provide a valid Account Number");
        return;
    }
    if(validPin !== addPin){
        alert("Wrong Pin");
        return;
    }

    const newAvailableBalance = availableBalance + addAmount

    document.getElementById("available-balance").innerText = newAvailableBalance

    
})


    // toogling feature
    document.getElementById("add-button").addEventListener("click", function(){
        document.getElementById("cash-out-parent").style.display = "none"
        document.getElementById("add-money-parent").style.display = "block"
    })

    document.getElementById("cash-out-button").addEventListener("click", function(){
        document.getElementById("add-money-parent").style.display = "none"
        document.getElementById("cash-out-parent").style.display = "block"
    })