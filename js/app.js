// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var playerOne = "X";
  var playerTwo = "O";
  var count = 0;
  var tacBoxes = $(".box");

  $(".box").on("click", function playerTurn(event){
    if(! $(this).text()){
      if(count % 2 === 0){
        $(this).text(playerOne);
        count++;
      }else if(count % 2 !== 0){
        $(this).text(playerTwo);
        count++;
      }
    }
  });
  if
$("#a"&&"#b"&&"#c").on("click", function winner(event){
  if(playerOne){
  alert("Winner");
}
});
/*
    alert("Player One You are a Winner!!");

  }else if(playerTwo == ("#1"&&"#2"&&"#3")||("#4"&&"#5"&&"#6")||
                         ("#7"&&"#8"&&"#9")||("#1"&&"#5"&&"#9")||
                         ("#3"&&"#5"&&"#6")||("#1"&&"#4"&&"#7")||
                         ("#2"&&"#5"&&"#8")||("#3"&&"#6"&&"#9")){

      alert("Player Two You are a Winner!!");

    }else {
      alert("It's a Draw");
}
*/


  $(".btn").on("click", function restartGame(event){
       $(".box").text("");
  });

});
