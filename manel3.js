function acao(){
let historia = prompt("Ora,ora quem eu encontro,velhos parceiros de roubos.Já que nesse fim de mundo tem poucos recursos,eu deveria me unir ou continuar solo?Sim ou Não?");
if(historia === "sim" || historia ==="SIM" || historia === "Sim"){
   let fimSim = confirm("Vamos lá bando é hora do show...");
    if(fimSim === true){
        location = "index.html";
    }


}
if(historia === "não" || historia === "nao" || historia === "Não" || historia === "Nao" || historia === "NÃO" || historia === "NAO"){
   let fimNao =  confirm("GAME OVER!!Mesmo em um mundo em ruina,devemos sempre procurar a união. Você deveria se juntar aos seus amigos, Manel.");
    if(fimNao === true){
        location = "index.html";
    }

}
}
