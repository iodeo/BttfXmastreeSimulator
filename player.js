function doit() {
  var button = document.getElementById("doit");
  if (button.innerHTML == "start") {
    button.innerHTML = "stop";
    start();
  }
  else {
    button.innerHTML = "start";
    stop();
  }
}

function stop() {
  // clear all timeouts
  var id = window.setTimeout(function() {}, 0);
  while (id--) {
      window.clearTimeout(id);
  }
  // init xmastree
  for (var col = 0; col < 10; col++) {
    for (var row = 0; row < 20; row++) {
      var id = "c" + (col+1) + "-l" + (row+1);
      var element = document.getElementById(id);
      element.classList.toggle("nolight", true);
    }
  }
}

function start() {
  for (let step=0; step < sequence.length; step++) {
    // using let instead of var is crucial for settimeout
    window.setTimeout(
      function() {
        for (var col = 0; col < 10; col++) {
          for (var row = 0; row < 20; row++) {
            var id = "c" + (col+1) + "-l" + (row+1);
            var element = document.getElementById(id);
            if (row < sequence[step][col+1]) {
              element.classList.toggle("nolight", false);
            }
            else {
              element.classList.toggle("nolight", true);
            }
          }
        }
      }, sequence[step][0]
    );
  }
}

