const usuarios = [
    {
        login: 'victor' ,
        pass: 'victor'
    },
    {
        login: 'julio' ,
        pass: 'julio'
    },
    {
        login: 'admin' ,
        pass: 'admin'
    }
];

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function Logar() {

    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validaLogin = false;

    for(let i in usuarios) {
        if(pegaUsuario === usuarios[i].login && pegaSenha === usuarios[i].pass) {
            validaLogin = true;
            break;
        }
    }

    if(validaLogin == true) {
        location.href = 'home.html'
    } else {
        alert('Usuário ou senha incorretos!');
    }

});