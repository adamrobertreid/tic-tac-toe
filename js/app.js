// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var playerOne = 'X';
  var playerTwo = 'O';
  var count = 0;
  var tacBoxes = $(".box");
  var count1 = 0;
  var count2 = 0;
  var countd = 0;

  $(".box").on("click", function playerTurn(event){
    if(! $(this).text()){
      if(count % 2 === 0){
        $(this).text(playerOne);
        count++;
      }else if(count % 2 !== 0){
        $(this).text(playerTwo);
        count++;
      }
      winner();
      countsWinner();
    }
});
  function winner(){
    var gameWinner;
    if( ($(tacBoxes.eq(0)).text()==="X" &&
         $(tacBoxes.eq(1)).text()==="X" &&
         $(tacBoxes.eq(2)).text()==="X" ) ||
        ($(tacBoxes.eq(3)).text()==="X" &&
         $(tacBoxes.eq(4)).text()==="X" &&
         $(tacBoxes.eq(5)).text()==="X" ) ||
        ($(tacBoxes.eq(6)).text()==="X" &&
         $(tacBoxes.eq(7)).text()==="X" &&
         $(tacBoxes.eq(8)).text()==="X" ) ||
        ($(tacBoxes.eq(0)).text()==="X" &&
         $(tacBoxes.eq(4)).text()==="X" &&
         $(tacBoxes.eq(8)).text()==="X" ) ||
        ($(tacBoxes.eq(2)).text()==="X" &&
         $(tacBoxes.eq(4)).text()==="X" &&
         $(tacBoxes.eq(6)).text()==="X" ) ||
        ($(tacBoxes.eq(0)).text()==="X" &&
         $(tacBoxes.eq(3)).text()==="X" &&
         $(tacBoxes.eq(6)).text()==="X" ) ||
        ($(tacBoxes.eq(1)).text()==="X" &&
         $(tacBoxes.eq(4)).text()==="X" &&
         $(tacBoxes.eq(7)).text()==="X" ) ||
        ($(tacBoxes.eq(2)).text()==="X" &&
         $(tacBoxes.eq(5)).text()==="X" &&
         $(tacBoxes.eq(8)).text()==="X" )){
          gameWinner = "playerOneWins";
   }else if( ($(tacBoxes.eq(0)).text()==="O" &&
              $(tacBoxes.eq(1)).text()==="O" &&
              $(tacBoxes.eq(2)).text()==="O" ) ||
             ($(tacBoxes.eq(3)).text()==="O" &&
              $(tacBoxes.eq(4)).text()==="O" &&
              $(tacBoxes.eq(5)).text()==="O" ) ||
             ($(tacBoxes.eq(6)).text()==="O"&&
              $(tacBoxes.eq(7)).text()==="O" &&
              $(tacBoxes.eq(8)).text()==="O" ) ||
             ($(tacBoxes.eq(0)).text()==="O" &&
              $(tacBoxes.eq(4)).text()==="O" &&
              $(tacBoxes.eq(8)).text()==="O" ) ||
             ($(tacBoxes.eq(2)).text()==="O" &&
              $(tacBoxes.eq(4)).text()==="O" &&
              $(tacBoxes.eq(6)).text()==="O" ) ||
             ($(tacBoxes.eq(0)).text()==="O" &&
              $(tacBoxes.eq(3)).text()==="O" &&
              $(tacBoxes.eq(6)).text()==="O" ) ||
             ($(tacBoxes.eq(1)).text()==="O" &&
              $(tacBoxes.eq(4)).text()==="O" &&
              $(tacBoxes.eq(7)).text()==="O" ) ||
             ($(tacBoxes.eq(2)).text()==="O" &&
              $(tacBoxes.eq(5)).text()==="O" &&
              $(tacBoxes.eq(8)).text()==="O" )){
            gameWinner = "playerTwoWins";
          }else {
          if(($(tacBoxes.eq(0)).text()==="" ||
                    $(tacBoxes.eq(1)).text()==="" ||
                    $(tacBoxes.eq(2)).text()==="" ||
                    $(tacBoxes.eq(3)).text()==="" ||
                    $(tacBoxes.eq(4)).text()==="" ||
                    $(tacBoxes.eq(5)).text()==="" ||
                    $(tacBoxes.eq(6)).text()==="" ||
                    $(tacBoxes.eq(7)).text()==="" ||
                    $(tacBoxes.eq(8)).text()==="" )){
                             gameWinner = "";
                  }else {
                    gameWinner = "Draw";
                  }
                }
                  return gameWinner;
          }
          function countsWinner(){
            var gameWinner = winner();
          if(gameWinner === "playerOneWins"){
            alert(gameWinner);
            count1++;
            console.log(count1);
          }else if (gameWinner === "playerTwoWins") {
            alert(gameWinner);
            count2++;
            console.log(count2);
          }else if (gameWinner === "Draw") {
            alert(gameWinner);
            countd++;
            console.log(countd);
          }
        }
       $(".btn").on("click", function restartGame(event){
            $(".box").text("");
       });
       $("#btn2").on("click", function resetWholeGame(event){
         window.location.reload();
       });
});
