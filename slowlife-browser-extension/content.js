// The extension is running this script on every page.
// You can add any JavaScript you want here.

function find_harmfull_content() {

    // These are just examples of the most useless internet distraction
    var finnish_harmful_keywords = ["uutiset", "sanomat", "lehti", "otsikot", "suosituimmat"];
    var news = ["headlines", "secrets", "gossip", "pop culture", "celebr", "scandal"];
    var funny = ["funny", "cats", "trump", "stupid", "epic", "failure", "owned", "comics", "idiot"];
    var nonsense = ["viral", "these people", "they say", "triggered", "warrior", "memes", "tweets"];
    var adult = ["porn", "penis", "pussy", "fuck", " sex ", "naked", "blowjob", "homemade"];
    var useless = ["entertainment", "commentary", "amazing", "most popular", "current events"];

    var stopwords = finnish_harmful_keywords;
    var stopwords = stopwords.concat(news);
    var stopwords = stopwords.concat(funny);
    var stopwords = stopwords.concat(nonsense);
    var stopwords = stopwords.concat(adult);
    var stopwords = stopwords.concat(useless);

    var queue = [document.body];
    var curr = -1;

    while (curr = queue.pop()) {
        for(var i = 0; i < stopwords.length; ++i) {
            console.log(stopwords[i]);
            if (curr.textContent.toLowerCase().match(stopwords[i])) {
                console.log(curr);
                return stopwords[i];
            }
        }
    }

    return ""; // Found nothing
}

WAIT_TIME = 10; // Default wait time is 10 seconds
EXTRA_TEXT = ""; // Nothing by default

var found_word_in_text = find_harmfull_content();
if( found_word_in_text ) {
  WAIT_TIME = WAIT_TIME * 10;
  EXTRA_TEXT = "<br /> <br/> EXTREMELY HARMFUL CONTENT DETECTED: " + found_word_in_text;
}

function hidepage() {
  var div_elem = document.createElement('div');
  var style = 'position: fixed; width: 95%; height: 95%; opacity: 0.90; z-index: 10000; ';
  style = style + 'background: repeating-linear-gradient( 45deg, transparent, transparent 80px, black 80px, orange 160px),';
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
  style = "font-size: xx-large; margin: 0; color: silver; font-family: sans-serif; ";
  center_div.style.cssText = style + "top: 50%; left: 35%; position: absolute;";
  text = "Wait and relax <span id='random_j25893567fwajA'>10</span> seconds. <br /> "
  text = text + "This tab must be visible or the counter stops. <br /> <br /> "
  text = text + "Take a deep breath."
  text = text + EXTRA_TEXT
  center_div.innerHTML = text

  div_elem.appendChild(center_div);
  div_elem.appendChild(script_elem);
  document.body.prepend(div_elem);
}

hidepage();
