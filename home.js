document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)


    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    const newAvailableBalance = availableBalance + addAmount

    document.getElementById("available-balance").innerText = newAvailableBalance
    
})