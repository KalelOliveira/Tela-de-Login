const btn = document.getElementById('atp');

btn.addEventListener("click", function () {

    let log = document.getElementById('login').value;
    let sen = document.getElementById('senha').value;

    c = 0
    for (let i = 0, len = localStorage.length; i < len; i++) {
        let login = localStorage.key(i);
        if (login == log) {
            let senha = localStorage.getItem(login);
            if (senha == sen) {
                alert('Logado')
                window.location.href = 'index.html'
                c = 1
                break
            }
        }
    } if (c == 0) {
        alert('Dado(s) inválido(s)')
    }
})