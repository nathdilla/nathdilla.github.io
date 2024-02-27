function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  "<br><br>THE TIME IS "+h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  var id = null;
function first() {
var elem = document.getElementById("tails"); 
var pos = 0;
clearInterval(id);
id = setInterval(frame, 10);
function frame() {
  if(pos==550)
    {
      pos=0;
    }  
  else if (pos > 275) {
    //clearInterval(id);
    pos++;
    elem.style.left = -pos +550+ 'px'; 
    }
    else {
    pos++; 
    elem.style.left = pos + 'px'; 
    }
}
}