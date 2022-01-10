function decidir(){
    alert("Qual a melhor forma de eu me dar bem?");
    var acaoPayton = prompt("ATACAR AGORA OU ESPERAR O ANOITECER");
    if(acaoPayton === "atacar agora" ||  acaoPayton === "ATACAR AGORA" || acaoPayton === "Atacar agora" || acaoPayton === "Atacar Agora"){
    var confirmFase2 = confirm("GAME OVER! VOCÊ NÃO VAI CONSEGUIR ASSALTAR COM TANTOS SEGURANÇAS NA ENTRADA! ATACAR AGORA NAO É UMA OPÇAO INTELIGENTE!");
        if(confirmFase2 === true){
            location = "index.html";
            return;
        }
    }

    if(acaoPayton === "esperar o anoitecer" || acaoPayton == "ESPERAR O ANOITECER" || acaoPayton === "Esperar o anoitecer" || acaoPayton === "Esperar O A"){
        alert("ISSO! A NOITE NÃO VAI TER NINGUEM, VAI SER A HORA PERFEITA");
       var gameOver = confirm("NÃO FALEI?! SOU RÁPIDA COMO NINGUEM! PARÁBENS PRA MIM HAHAHAHA! ESSA FOI FÁCIL!");
        if(gameOver === true){
            location = "payton3.html";
            }
        }
        }
    