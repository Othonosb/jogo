


function additem() {
    alert("OLÁ! ESTOU INVESTIGANDO O ROUBO AO BANCO. PRECISO FAZER ALGUMAS PERGUNTAS E SE MENTIR VAI PRESO!");
    var acaoJack = prompt("VOCÊ CONHECE A PAYTON? SIM OU NÃO");
    if(acaoJack === "conheço" || acaoJack === "sim" || acaoJack === "SIM" || acaoJack === "Sim" || acaoJack === "CONHEÇO"){
        confirm("ENTÃO MINHAS SUSPEITAS ESTÃO CORRETAS....");
    
}

if(acaoJack === "nao" || acaoJack === "não" || acaoJack === "NÃO" || acaoJack === "Não" || acaoJack === "Não conheço"){
    var pergunta3 = confirm("GAME OVER! VOCẼ FOI VISTO ONTEM AQUI NESSE BAR CONVERSANDO COM A PAYTON, EU FALEI QUE SE MENTISSE IA ACABAR COM VOCÊ!");
        if(pergunta3 === true){
            location = "infojack.html";
            return;
}
}

    alert("VAMOS PRA MAIS OUTRA...");
    var acaoJack2 = prompt("VOCÊ ESTAVA NA PRAIA ONTEM? SIM OU NÃO");
    if(acaoJack2 === "sim" || acaoJack2 === "vi" || acaoJack2 === "vi sim" || acaoJack2 === "SIM" || acaoJack2 === "Vi Sim" || acaoJack2 === "eu vi"){
        var confirmar = confirm("HORA DE ME CONTAR TUDO OU VOCÊ VAI VIRAR POEIRA! NOSSA CIDADE ESTÁ UM CAOS E NÃO VOU DEIXAR SE ACABAR! VAMOS A PRAIA!");
        if(confirmar === true){
            location = "jackPraia.html";
    }
    }

    if(acaoJack2 === "nao" || acaoJack2 === "não" || acaoJack2 == "Não" || acaoJack2 == "NÃO" || acaoJack2 == "NÃO VI" || acaoJack2 == "Nao vi"){
        var pergunta2 = confirm("GAME OVER! VOCÊ ESTÁ MENTINDO! NÃO É UMA BOA ESTRATÉGIA MENTIR PRA QUEM MANTEM A ORDEM NESSE FIM DE MUNDO!");
        if(pergunta2 === true){
            location = "infojack.html"
            return;
    }
    }
}
     