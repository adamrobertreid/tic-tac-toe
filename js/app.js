// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var count = 0;

  $(".box").on("click", function playerTurn(event){
    if(! $(this).text()){
      if(count % 2 === 0){
        $(this).text("X");
        count++;
      }else if(count % 2 !== 0){
        $(this).text("O");
        count++;
      }
    }
  });


  $(".btn").on("click", function restartGame(event){
       $(".box").text("");
  });

});
