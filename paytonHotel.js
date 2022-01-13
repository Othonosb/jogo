function decidiracao(){
    alert("QUAL A MELHOR FORMA DE EU ME DAR BEM HOJE?");
    var acaoPayton = prompt("ROUBAR QUARTOS OU ESPERAR ANOITECER?");
    if(acaoPayton === "roubar" || acaoPayton === "Roubar"|| acaoPayton === "ROUBAR" || acaoPayton === "ROUBAR QUARTOS" || acaoPayton === "roubar os quartos" || acaoPayton === "Roubar quartos" || acaoPayton === "roubar quartos" || acaoPayton === "Roubar Quartos" || acaoPayton === "ATACAR AGORA" || acaoPayton === "Atacar agora" || acaoPayton === "Atacar Agora"){
    var confirmFase2 = confirm("GAME OVER! VOCÊ NÃO VAI CONSEGUIR ROUBAR COM AS PESSOAS NOS QUARTOS AGORA! NAO É UMA OPÇAO INTELIGENTE!");
        if(confirmFase2 === true){
            location = "infopayton.html";
            return;
        }
    }

    if(acaoPayton === "ESPERAR" || acaoPayton === "esperar" || acaoPayton === "Esperar" || acaoPayton === "esperar anoitecer" || acaoPayton == "ESPERAR ANOITECER" || acaoPayton === "Esperar anoitecer" || acaoPayton === "Esperar Anoitecer"){
        alert("ISSO! A NOITE OS HOSPEDES DO HOTEL VÃO DESCER PARA COMER E SERÁ A HORA PERFEITA PARA ATACAR");
       var gameOver = confirm("NÃO FALEI?! ESSA FOI FÁCIL DEMAIS. St. ELMO É PEQUENA PRA MIM!");
        if(gameOver === true){
            location = "payton3.html";
            }
        }
        }
    