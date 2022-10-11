console.log("HI")

function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var loginCadastrado = "teste";
var senhaCadastrada = "teste";

var tentativas = 1;

while (tentativas <= 3) {

     loginInformado = prompt("Informe seu login");
     senhaInformada = prompt("Informe sua senha");


    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        mostra("Bem-vindo ao sistema " + loginInformado);

        // Não entendi o motivo deste if abaixo
        // if (tentativas = 3) { // Esse if está fazendo uma atribuição onde testa se tentativas recebeu o valor de 3
        //     tentativas++; // Porque está incrementando se o login foi um sucesso?
        // }

        break; // Para sair do loop

    } else {

        alert("Login inválido. Tente novamente");
        tentativas++;

    }


}

// alert("Login inválido");