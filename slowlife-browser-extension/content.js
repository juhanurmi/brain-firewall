// The extension is running this script on every page.
// You can add any JavaScript you want here.

function hidepage() {
  var div_elem = document.createElement('div');
  var style = 'position: fixed; width: 95%; height: 95%; opacity: 0.98; z-index: 10000; ';
  style = style + 'background: linear-gradient(to bottom right, black, orange); ';
  style = style + '-moz-box-shadow: 3px 3px 5px 6px grey; ';
  style = style + '-webkit-box-shadow: 3px 3px 5px 6px grey; ';
  style = style + 'box-shadow: 3px 3px 5px 6px #ccc; ';
  style = style + "margin: 20px;"
  div_elem.style.cssText = style;
  div_elem.id = "random_IO0_3279";

  var func = "function RMthisElement(){ document.getElementById('random_IO0_3279').remove(); }";
  var func_call = "(function() { " +
      "var time = 10, " +
          "delta = 1, " +
          "tid; " +

      "tid = setInterval(function() { " +
          "if ( window.blurred ) { return; } " +
          "time -= delta; " +
          "var counter = document.getElementById('random_j25893567fwajA'); " +
          "counter.innerHTML = time; " +
          "if ( time <= 0 ) { " +
              "clearInterval(tid); " +
              "RMthisElement(); " +
          "} " +
      "}, delta*1000); " +
  "})(); " +
  "window.onblur = function() { window.blurred = true; }; " +
  "window.onfocus = function() { window.blurred = false; }; ";

  var script_elem = document.createElement('script');
  script_elem.type = "text/javascript";
  script_elem.innerHTML = func + func_call;

  var center_div = document.createElement('div');
  style = "font-size: xx-large; margin: 0; color: black; ";
  center_div.style.cssText = style + "top: 50%; left: 35%; position: absolute;";
  text = "Wait and relax <span id='random_j25893567fwajA'>10</span> seconds. <br /> "
  text = text + "This tab must be visible or the counter stops. <br /> <br /> "
  text = text + "Take a deep breath."
  center_div.innerHTML = text

  div_elem.appendChild(center_div);
  div_elem.appendChild(script_elem);
  document.body.prepend(div_elem);
}

hidepage();
