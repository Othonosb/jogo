function acao(){
alert("OLHA QUEM EU ENCONTRO... VELHOS PARCEIROS DE ROUBO. JÁ QUE NESSE FIM DE MUNDO TEM POUCOS RECURSOS EU DEVERIA:   1.ME UNIR A ELES OU    2.CONTINUAR SOLO?")    
let historia = prompt("1 OU 2?");
if(historia === "1" || historia ==="SIM" || historia === "Sim"){
   let fimSim = confirm("PARABENS! UNINDO PARA CONQUISTAR! ISSO É CARACTERISTICA DE UM BOM VENCEDOR! ");
    if(fimSim === true){
        location = "manel4.html";
    }


}
if(historia === "não" || historia === "nao" || historia === "2" || historia === "Nao" || historia === "NÃO" || historia === "NAO"){
   let fimNao =  confirm("GAME OVER!!MESMO EM UM MUNDO EM RUINAS , DEVEMOS SEMPRE PROCURAR A UNIÃO. VOCÊ DEVERIA SE JUNTAR AOS SEUS AMIGOS, Manel");
    if(fimNao === true){
        location = "index.html";
    }

}
}
