document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositString = inputDeposit.value;
    const deposit = parseFloat(inputDepositString);
    inputDeposit.value='';

    if(isNaN(deposit)){
        alert('Please Provide a number');
        return;
    }
    
    //fine deposit store & added valu
    const depositStore = document.getElementById('deposit-store');
    const depositStoreValueString = depositStore.innerText;
    const depositValue = parseFloat(depositStoreValueString);
    const totalDeposit = deposit + depositValue;
    depositStore.innerText = totalDeposit;

    //added total balance 
    const totalBalance = document.getElementById('total-balance');
    
    const totalBalanceString= totalBalance.innerText;
    const totalBalanceStore = parseFloat(totalBalanceString);
    console.log(totalBalanceStore)

    const mainBalance = totalBalanceStore + deposit;
    totalBalance.innerText= mainBalance;
})

