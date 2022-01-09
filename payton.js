function descobrir(){
    alert("Onde eu deveria aplicar meus belos golpes hoje?");
    var acaoPayton = prompt("BANCO OU HOTEL?");
    if(acaoPayton === "banco" ||  acaoPayton === "BANCO" || acaoPayton === "Banco" || acaoPayton === "BaNcO"){
    var confirmFase2 = confirm("OS BANQUEIROS QUE SE CUIDEM, MAS TENHO QUE SER RÁPIDA! VAMOS LÁ!");
        if(confirmFase2 === true){
            location = "paytonBanco.html"
            return;
        }
    }
    if(acaoPayton === "hotel" || acaoPayton == "HOTEL" || acaoPayton === "Hotel" || acaoPayton === "HoTeL"){
        alert("HOJE ESSE HOTEL VAI TER PREJUIZO!");
        location = "paytonHotel.html"
    }else{
       var gameOver = confirm("GAME OVER! ESPERAVA MAIS DE VOCÊ, PAYTON! VOCÊ NÃO VAI CONSEGUIR GARANTIR SUA SOBREVIVÊNCIA SEM TOMAR ATITUDES!");
        if(gameOver === true){
            location = "index.html"
        }
    }
    }
 