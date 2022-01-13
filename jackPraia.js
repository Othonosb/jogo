


function acaoJack() {
    alert("NOSSO MUNDO ESTA DEVASTADO COM DOENÇAS, FALTA DE RECURSOS E EU NÃO VOU DEIXAR MAL FEITORES ACABAREM COM O RESTO! DEVO ME ESCONDER?");
    var acaoJack = prompt("FICO ESCONDIDO? SIM OU NÃO");
    if(acaoJack === "escondido" || acaoJack === "sim" || acaoJack === "SIM" || acaoJack === "Sim" || acaoJack === "CONHEÇO"){
        confirm("BOA, É MUITO MELHOR OBSERVAR ENQUANTO CHEGA O REFORÇO!....");
    
}
if(acaoJack === "nao" || acaoJack === "não" || acaoJack === "NÃO" || acaoJack === "Não" || acaoJack === "Não conheço"){
    var pergunta3 = confirm("GAME OVER! VOCẼ NÃO VAI CONSEGUIR DETER TANTOS BANDIDO, É LOUCURA ATACAR SOZINHO. REVEJA SUA ESTRATÉGIA!");
        if(pergunta3 === true){
            location = "infojack.html";
            return;
}
}

    alert("PERDEMOS PARTE DOS NOSSOS HOMENS NO CAMINHO ATÉ A PRAIA.. PARECE QUE ELES ESTAVAM ME SEGUINDO E DESCOBRIRAM O PLANO! PRECISO AGIR AGORA OU VOU MORRER!");
    var acaoJack2 = prompt("CANCELAR OU ATACAR?");
    if(acaoJack2 === "CANCELAR" || acaoJack2 === "Cancelar" || acaoJack2 === "cancelar" || acaoJack2 === "SIM"){
       var confirmar1 = confirm("PARABENS! AS VEZES É NECESSÁRIO RECUAR PARA VENCER!");
        if(confirmar1 === true){
            location = "jack3.html";
    }
    }

    if(acaoJack2 === "ATACAR" || acaoJack2 === "Atacar" || acaoJack2 ==="atacar" || acaoJack2 === "ataque" || acaoJack2 ==="ATAQUE" || acaoJack2 === "AtAcAr"){
        var pergunta2 = confirm("GAME OVER! NEM SEMPRE PODEMOS ATACAR O INIMIGO. ESPERAR TAMBEM FAZ PARTE!");
        if(pergunta2 === true){
            location = "infojack.html"
            return;
    }
    }
}