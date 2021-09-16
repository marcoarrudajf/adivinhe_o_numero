var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//console.log(numeroAleatorio);

var palpites = document.querySelector('.palpites');
var ultimoPalpite = document.querySelector('.ultimoPalpite');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpite = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpite === 1) {
        palpites.textContent = 'Palpites anteriores: '
    }
    palpites.textContent += palpiteUsuario + ' ';
    if (palpiteUsuario === numeroAleatorio) {
        ultimoPalpite.textContent = " Parabéns! Você acertou! ";
        ultimoPalpite.style.backgroundColor = 'green';
        baixoOuAlto.textContent = ' ';
        configFimDeJogo();
    } else if (contagemPalpite === 10) {
        ultimoPalpite.textContent = '!!!FIM DE JOGO!!!';
        baixoOuAlto.textContent = ' ';
        configFimDeJogo();
    } else {
        ultimoPalpite.textContent = 'Errado!';
        ultimoPalpite.style.backgroundColor = 'red';
        if (palpiteUsuario > 100) {
            palpites.textContent = 'Número inválido!'
            //configFimDeJogo();
            reiniciarJogo();
        }
        if (palpiteUsuario <
            numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo';
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = ' Seu palpite está muito alto'
        }
    }
    contagemPalpite++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite)

function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar Novo Jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
    campoPalpite.value = ' ';
    campoPalpite.focus();
    contagemPalpite = 1;
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = ' ';
    campoPalpite.focus();

    ultimoPalpite.style.backgroundColor = 'transparent';
    ultimoPalpite.textContent = '';
    palpites.textContent = '';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    //console.log(numeroAleatorio);
}


