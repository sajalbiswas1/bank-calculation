document.getElementById('btn-login').addEventListener('click', function(){
    const inputEmail= document.getElementById('input-email');
    const emailValue= inputEmail.value;
    // console.log(inputEmail.value)

    const inputPassword = document.getElementById('input-password');
    const passwordValue = inputPassword.value;
    // console.log(inputPassword);

    if(emailValue === 'Sajalb@gmail.com' && passwordValue === '12345678' || passwordValue === 12345678){
        // const store = "Welcome to Your Bap Er Bank"
        // const hello = alert(store)
        
        window.location.href = 'bank.html';
    }
    else{
        alert("Plase enter your valid email & password");
    }
})