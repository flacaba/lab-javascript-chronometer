var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime() {

}

function printMinutes() {
  setInterval(function() {
    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    minUni.innerText = minutes[1];
    minDec.innerText = minutes[0];
  });
}

function printSeconds() {
  setInterval(function(){
    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
    secUni.innerText = seconds[1]; 
    secDec.innerText = seconds[0];
  
  },1000);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText ="SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.classList[1] === "start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printSeconds();
    printMinutes();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});

