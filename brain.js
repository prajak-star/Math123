function adduser(){
    //player1//
    var player1 = document.getElementById("player1name").value;
    console.log(player1);
    localStorage.setItem("player1",player1);
    //player2//
    var player2=document.getElementById("player2name").value;
    console.log(player2);
    localStorage.setItem("player2",player2);
    //locate//
    window.location="page-2.html";
}
