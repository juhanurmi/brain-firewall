// The extension is running this script on every page.
// You can add any JavaScript you want here.

var WAIT_TIME = 0;
EXTRA_TEXT = ""; // Nothing by default

function setTime(seconds) {
  if ( seconds == undefined || !parseInt(seconds["seconds"]) ) {
    WAIT_TIME = 10;
	}
  else {
    WAIT_TIME = seconds["seconds"];
  }
  main();
}

function main() {

  if ( WAIT_TIME ){
    var word = find_harmfull_content().toUpperCase();
    if( word ) {
      WAIT_TIME = WAIT_TIME * 10;
      EXTRA_TEXT = "<br /> <br/> HARMFUL CONTENT DETECTED: " + word;
    }
    hidepage();
  }
}

function contentCheck(words) {
  if ( words && words["words"]) {
    STOPWORDS = words["words"];
	}
  else {
    STOPWORDS = [];
  }
  chrome.storage.sync.get("seconds", setTime);
}

chrome.storage.sync.get("words", contentCheck);

function find_harmfull_content() {

    var queue = [document.body];
    var curr = -1;

    while (curr = queue.pop()) {
        for(var i = 0; i < STOPWORDS.length; ++i) {
            if (curr.textContent.toLowerCase().match(STOPWORDS[i])) {
                return STOPWORDS[i];
            }
        }
    }

    return ""; // Found nothing
}

function hidepage() {
  var div_elem = document.createElement('div');
  var style = 'position: fixed; width: 95%; height: 95%; opacity: 0.95; z-index: 10000; ';
  style = style + 'background: repeating-linear-gradient( 45deg, transparent, transparent 15px, black 285px, orange 300px), ';
  style = style + ' linear-gradient(to bottom right, black, orange);';
  style = style + '-moz-box-shadow: 3px 3px 5px 6px grey; ';
  style = style + '-webkit-box-shadow: 3px 3px 5px 6px grey; ';
  style = style + 'box-shadow: 3px 3px 5px 6px #ccc; ';
  style = style + "margin: 20px;"
  div_elem.style.cssText = style;
  div_elem.id = "random_IO0_3279";

  var func = "function RMthisElement(){ document.getElementById('random_IO0_3279').remove(); }";
  var func_call = "(function() { " +
      "var time = " + WAIT_TIME + ", " +
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
  style = "font-size: xx-large; margin: 0; color: grey; font-family: sans-serif; background: black;";
  center_div.style.cssText = style + "top: 40%; left: 40%; position: absolute;";
  text = "Wait and relax <span id='random_j25893567fwajA'>" + WAIT_TIME + "</span> seconds <br /> "
  text = text + "This tab must be visible or the counter stops <br /> <br /> "
  text = text + "Take a deep breath"
  text = text + EXTRA_TEXT
  text = text + "<br /> <br />   --- Enjoy slowlife browsing experiment ---"
  center_div.innerHTML = text

  div_elem.appendChild(center_div);
  div_elem.appendChild(script_elem);
  document.body.prepend(div_elem);
}
