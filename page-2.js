player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
player1score=0;
player2score=0;

document.getElementById("player1n").innerHTML=player1 + " ;";
document.getElementById("player2n").innerHTML=player2 + " ;";

document.getElementById("player_1score").innerHTML=player1score;
document.getElementById("player_2score").innerHTML=player2score;
 
document.getElementById("playerque").innerHTML= "Question turn-"+player1;
document.getElementById("playeransw").innerHTML="Answer turn-"+player2;

questionturn="player1";
answerturn="player2";


function send(){
//understanding the sum//
sum_get1=document.getElementById("num1").value;
sum_get2=document.getElementById("num2").value;

sum1=parseInt(sum_get1);
sum2=parseInt(sum_get2);

localStorage.setItem("number1",sum1);
localStorage.setItem("number2",sum2);

Question=sum1+" x "+sum2;

//html//
questionary="<h4 id='wordisplay'> Q."+ Question +"</h4>";
inputary="<br> Ans -"+ "<input id='producto' type='text'>";
buttering="<br> <br> <button  class='btn btn-info' onclick='check()'> Check </button>";
rowing= questionary+inputary+buttering;
document.getElementById("output").innerHTML=rowing;
document.getElementById("num1").innerHTML=" ";
document.getElementById("num2").innerHTML=" ";
}

function check(){
//setting the answer and getting their answer//
answer=sum1*sum2;

their_answer=document.getElementById("producto").value;

if (answer==their_answer) {
    
    if (answerturn=="player1") {
        player1score=player1score+1;
        document.getElementById("player_1score").innerHTML=player1score;
    } else{
       player2score=player2score+1;
       document.getElementById("player_2score").innerHTML=player2score; 
    }

}

if (questionturn=="player1") {
    questionturn="player2";
    answerturn="player1";
    document.getElementById("playerque").innerHTML= "Question turn-"+player2;
    document.getElementById("playeransw").innerHTML="Answer turn-"+player1;
}
else{
    questionturn="player1";
    answerturn="player2";
    document.getElementById("playerque").innerHTML= "Question turn-"+player1;
    document.getElementById("playeransw").innerHTML="Answer turn-"+player2;
}

document.getElementById("output").innerHTML="";
}