document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
//Your board object needs a property named cells
//cells.board.cells should be an array.
//This board doesn't seem to have any cells in it... 
//try adding some elements to your array.
//At least one of those cells is not an object! { }

var board={
    cells: [ {row:0,col:0,isMine:false,isMarked:false,hidden:true},
             {row:0,col:1,isMine:true,isMarked:false,hidden:true},
             {row:0,col:2,isMine:false,isMarked:false,hidden:true},
             {row:0,col:3,isMine:false,isMarked:false,hidden:true},

             {row:1,col:0,isMine:true,isMarked:false,hidden:true},
             {row:1,col:1,isMine:false,isMarked:false,hidden:true},
             {row:1,col:2,isMine:true,isMarked:false,hidden:true},
             {row:1,col:3,isMine:false,isMarked:false,hidden:true},

             {row:2,col:0,isMine:false,isMarked:false,hidden:true},
             {row:2,col:1,isMine:true,isMarked:false,hidden:true},
             {row:2,col:2,isMine:false,isMarked:false,hidden:true},
             {row:2,col:3,isMine:false,isMarked:false,hidden:true},

             {row:3,col:0,isMine:false,isMarked:false,hidden:true},
             {row:3,col:1,isMine:true,isMarked:false,hidden:true},
             {row:3,col:2,isMine:false,isMarked:false,hidden:true},
             {row:3,col:3,isMine:false,isMarked:false,hidden:true},

    ] 

    //checkForWin:checkForWin
}




function startGame () {
  // Don't remove this function call: it makes the game work!
  board.cells.forEach(function(cell){
    var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
    
    cell.surroundingMines=countSurroundingMines(surroundingCells);
  
  });

  //document.addEventListener('click', checkForWin);
 // document.addEventListener('contextmenu', checkForWin);

  lib.initBoard()

 
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
board.checkForWin=function () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)'
  //   lib.displayMessage('You win!')
    

  let notMarkedMine=board.cells.find(cell =>{
         
       return cell.isMine==true&&cell.isMarked==false ;
     
      
  });

  let neverClickedCell=board.cells.find(cell =>{

      return cell.hidden==true&&cell.isMarked==false 

 });


  
 
  if(notMarkedMine==undefined&&neverClickedCell==undefined 
     ){
    
    lib.displayMessage('You win!')

    
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

//board.cells.forEach(function(cell){
  //var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  
  //cell.surroundingMines=countSurroundingMines(surroundingCells);

//});
 // var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cells) {
      //var surroundingMines;

      //cells.map(cell =>{
            
           //if(cell.isMine==true||surroundingMines<=8){
              //surroundingMines++;
           //}
           //else{
              //surroundingMines=0;

           //}

      //});
    //return surroundingMines;

      let arr=cells.filter(cell =>{

          return cell.isMine==true;
      });

      if(arr.length<=8){
        return arr.length; 
      }
      else{
        return 0;
      }
   }

