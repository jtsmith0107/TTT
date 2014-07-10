(function (root) {
  var TTT = root.TTT = (root.TTT || {});
  
  var TTTUI = TTT.TTTUI = function($board){
    this.board = $board;
    this.game = new TTT.Game();
  };
  
  TTTUI.prototype.setUpBoard = function(){
    _(3).times(function(i){
      $("#board").append("<div class = 'row' id = " + i + "> </div>");
    });
    
    _.times(3, function(j){
      $(".row").append("<div class = 'square' id = " + j + "> </div>");
    });

  };
  
  TTTUI.prototype.setUpHandlers = function(){
    var game = this;
    $('#board').on('click', '.square', game.clickHelper.bind(game));
  };
  
  TTTUI.prototype.clickHelper = function(event){
    var $square = $(event.target);
    var $row = $square.parent();
    $square.html(this.game.player);
    this.game.turn([$row.attr("id"), $square.attr("id")]);
  };
  
})(this);