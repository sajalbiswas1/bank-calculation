document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawString = inputWithdraw.value;
    const inputValue = parseFloat(inputWithdrawString);
    inputWithdraw.value='';

    if(isNaN(inputValue)){
        alert('Please Provide a number');
        return;
    }
    

    
    const withdrawStore = document.getElementById('withdraw-store');
    const withdrawStoreString = withdrawStore.innerText;
    const withdrawValue = parseFloat(withdrawStoreString);
    
    const withdrawBalance = withdrawValue + inputValue;
    

    //total balance added
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString= totalBalance.innerText;
    const totalBalanceStore = parseFloat(totalBalanceString);
    if(inputValue > totalBalanceStore){
        alert('not enough balance');
        return;

    }

    withdrawStore.innerText= withdrawBalance;
    const totalMainBalance = totalBalanceStore - inputValue;
    totalBalance.innerText= totalMainBalance;
})