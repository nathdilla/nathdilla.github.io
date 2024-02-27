
function MazeCell(){
  this.row = -1;
  this.col = -1;
  this.direction = 0;
  this.visited = false;
}

function getRandom(max){
return Math.floor(Math.random()*max);
}

const MAZE_WIDTH = 50;
const MAZE_HEIGHT = 50;
var startX=getRandom(MAZE_WIDTH);
var startY=getRandom(MAZE_HEIGHT);
var endX=getRandom(MAZE_WIDTH);
var endY=getRandom(MAZE_HEIGHT);

var audio = new Audio('assets/tacobellsfx.mp3');

// Create one dimensional array
var maze = new Array(MAZE_WIDTH);
  
// Loop to create 2D array using 1D array
for (var i = 0; i < maze.length; i++) {
    maze[i] = new Array(MAZE_HEIGHT);
}
  
var h = 0;
  
// generate new maze
for (var i = 0; i < MAZE_WIDTH; i++) {
    for (var j = 0; j < MAZE_HEIGHT; j++) {
      var randomNum=Math.floor(Math.random()*9);
      if(i==startX&&j==startY){
        maze[i][j]=3;
      }
      else if(i==endX&&j==endY){
        maze[i][j]=4;
      }
      else if(randomNum<3){
        maze[i][j]=1;
      }
      else{
        maze[i][j]=0;
      }
    }
}

let steps=[];

var cells = new Array(MAZE_WIDTH);
for (var i = 0; i < cells.length; i++) {
  cells[i] = new Array(MAZE_HEIGHT);
}

for (var i = 0; i < MAZE_WIDTH; i++) {
  for (var j = 0; j < MAZE_HEIGHT; j++) {
    cells[i][j]=new MazeCell;
  }
}

var start;
var end;

for (var i = 0; i < MAZE_WIDTH; i++) {
  for (var j = 0; j < MAZE_HEIGHT; j++) {
    if(maze[i][j]!=1){
      cells[i][j].row=i;
      cells[i][j].col=j;
      if(maze[i][j]==3){
        start=cells[i][j];
      }
      if(maze[i][j]==4){
        end=cells[i][j];
      }
    }
  }
}

function depthFirst()//traverse distance in maze until it finds end or until termination
{
    let path = [];//directions

    var i=start.row;//col position
    var j=start.col;//row position

    var valid=false;//to ensure we don't terminate at the start

    path.push(cells[i][j]);

    while(true){
      currentCell=cells[i][j];
      steps.push(cells[i][j]);
      //maze[i][j]=5;
      // print(currentCell);
      if(i==end.row && j==end.col){//if we reached the end
          print("path found");
          break;
      }
      if(valid && i==start.row && j== start.col){//if we end up back at the beginning and there are no more places to go
          print("path not found");
          break;
      }
      valid=false;//are we not trapped?
      if(j>0 && cells[i][j-1].col!=-1 && cells[i][j-1].row!=-1 && cells[i][j-1].visited == false){//if we end up back at the beginning and there are no more places to go
        j--;
        currentCell=cells[i][j];
        path.push(currentCell);
        cells[i][j].visited = true
        valid=true;
      }//north
      else if(i<MAZE_WIDTH-1 && cells[i+1][j].col!=-1 && cells[i+1][j].row!=-1 && cells[i+1][j].visited == false){//if we end up back at the beginning and there are no more places to go
        i++;
        currentCell=cells[i][j];
        path.push(currentCell);
        cells[i][j].visited = true
        valid=true;
      }//east
      else if(i>0 && cells[i-1][j].col!=-1 && cells[i-1][j].row!=-1 && cells[i-1][j].visited == false){//if we end up back at the beginning and there are no more places to go
        i--;
        currentCell=cells[i][j];
        path.push(currentCell);
        cells[i][j].visited = true
        valid=true;
      }//west
      else if(j<MAZE_HEIGHT-1 && cells[i][j+1].col!=-1 && cells[i][j+1].row!=-1 && cells[i][j+1].visited == false){//if we end up back at the beginning and there are no more places to go
        j++;
        currentCell=cells[i][j];
        path.push(currentCell);
        cells[i][j].visited = true
        valid=true;
      }//south
      else{//checked every direction
        // print("go back");
        currentCell=path[path.length-1];//go to the last spot
        i=currentCell.row;//set positions
        j=currentCell.col;
        path.pop();//remove this from the path
        if(path.length==0){
          print("no path");
          break;
        }
      }
      valid=false;

    }
}

var finish_sound;

function setup() {
  let canvas = createCanvas(500,500);
  canvas.parent('canvasContainer');
  depthFirst();
}

var trailvalue=255;

function draw_grid(){
  for (let i = 0; i < MAZE_WIDTH; i++) { 
    for (let j = 0; j < MAZE_HEIGHT; j++) {
      ellipse(i*10,j*10,2,2);
      if(maze[i][j]==3){
        let c = color(0,255,160);
        fill(c);
        rect(i*10,j*10,10,10);
      }
      if(maze[i][j]==4){
        let c = color(255, 99, 46);
        fill(c);
        rect(i*10,j*10,10,10);
      }
      if(maze[i][j]==1){
        let c = color(0,0,0);
        fill(c);
        rect(i*10,j*10,10,10);
      }
      if(maze[i][j]==5){
        noStroke();
        let c = color(2, 155, trailvalue);
        fill(c);

        rect(i*10,j*10,10,10);
        //stroke();
        // trailvalue--;
        // if(trailvalue==0){
        //   trailvalue=255;
        // }
      }
    }
  }
}

var frames = 0;
var index=0;
var done=false;

function draw() {
  background(220);
  draw_grid();
  if(frames!=steps.length){
    frames++;
    if(frames%1==0){
      maze[steps[index].row][steps[index].col]=5;
      index++;
    }
  }
  else if(frames==steps.length&&done==false){
    print("done");
    done=true;
    // var audio=document.getElementById("audio");
    // audio.play();
  }
}
