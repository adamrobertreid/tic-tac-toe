// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var playerOne = 'X';
  var playerTwo = 'O';
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
      winner();
    }
});
  function winner(){
    var gameWinner = " ";
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
          gameWinner = "Player One";
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
            gameWinner = "Player Two";
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
                             gameWinner = '';
                           }else gameWinner = ("Draw");
          }
          console.log (gameWinner);
          return gameWinner;

    }
    
       $(".btn").on("click", function restartGame(event){
            $(".box").text("");
       });
  });
