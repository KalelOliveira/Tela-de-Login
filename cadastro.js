const btn = document.getElementById('fgh');

btn.addEventListener("click", function(){

    let ema = document.getElementById('email').value;
    let sen2 = document.getElementById('senha2').value;
    let sen3 = document.getElementById('senha3').value;

    if(sen2==sen3){
        localStorage.setItem(ema, sen2);
        alert('Conta criada');
        window.location.href = 'index.html'
    }else{
        alert('Senha inválida')
    }

})