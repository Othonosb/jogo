function decidir(){
    alert("QUAL A MELHOR FORMA DE EU ME DAR BEM HOJE?");
    var acaoPayton = prompt("ATACAR AGORA OU ESPERAR ANOITECER");
    if(acaoPayton === "atacar" || acaoPayton === "ATACAR" || acaoPayton === "atacar agora" ||  acaoPayton === "ATACAR AGORA" || acaoPayton === "Atacar agora" || acaoPayton === "Atacar Agora"){
    var confirmFase2 = confirm("GAME OVER! VOCÊ NÃO VAI CONSEGUIR ASSALTAR COM TANTOS SEGURANÇAS NA ENTRADA! ATACAR AGORA NAO É UMA OPÇAO INTELIGENTE!");
        if(confirmFase2 === true){
            location = "infopayton.html";
            return;
        }
    }

    if(acaoPayton === "esperar" || acaoPayton === "ESPERAR" || acaoPayton === "esperar anoitecer" || acaoPayton == "ESPERAR ANOITECER" || acaoPayton === "Esperar anoitecer" || acaoPayton === "Esperar Anoitecer"){
        alert("ISSO! A NOITE NÃO VAI TER NINGUEM, VAI SER A HORA PERFEITA PRA ROUBAR!");
       var gameOver = confirm("NÃO FALEI?! SOU RÁPIDA DEMAIS! E ESSA FOI COMO TIRAR DOCE DE CRIANÇA! PŔOXIMA!");
        if(gameOver === true){
            location = "payton3.html";
            }
        }
        }
    