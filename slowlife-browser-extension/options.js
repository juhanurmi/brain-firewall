// Default time is 10 seconds
var defaultSeconds = 10;
// These are just examples which words someone might want to block
var finnish_harmful_keywords = ["uutiset", "sanomat", "lehti", "otsikot", "suosituimmat", "muoti"];
var news = ["headlines", "secrets", "gossip", "pop culture", "celebrities", "scandal", "sport news", "mass media"];
var funny = ["funny", "cats", "trump", "stupid", "failures", "owned", "comics", "idiot"];
var nonsense = ["these people", "they say", "triggered", "warrior", "memes", "tweeting", "retard"];
var adult = ["porn", "penis", "pussy", "fucking", " sex ", "naked", "blowjob", "homemade"];
var useless = ["entertainment", "commentary", "amazing", "most popular", "current events", "leftist", "left-wing", "right-wing"];
var defaultStopwords = finnish_harmful_keywords;
var defaultStopwords = defaultStopwords.concat(news);
var defaultStopwords = defaultStopwords.concat(funny);
var defaultStopwords = defaultStopwords.concat(nonsense);
var defaultStopwords = defaultStopwords.concat(adult);
var defaultStopwords = defaultStopwords.concat(useless);


function showBlockwords(words) {

  if ( words != undefined && words["words"] ) {
		stopwords = words["words"];
	}
  else {
    stopwords = defaultStopwords;
  }

  document.getElementById("words").innerHTML = stopwords.join(",");
}

function loadOptions(seconds) {

	if ( seconds == undefined || !parseInt(seconds["seconds"]) ) {
		seconds = defaultSeconds;
	}

	var select = document.getElementById("seconds");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == seconds["seconds"]) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select1 = document.getElementById("seconds");
  var seconds = parseInt( select1.children[select1.selectedIndex].value );
	chrome.storage.sync.set({"seconds": seconds});

  var select2 = document.getElementById("words");
  var words = select2.innerHTML.split(",");
  if(words) {
      chrome.storage.sync.set({"words": words});
  }
}

function eraseOptions() {
	chrome.storage.sync.set({"seconds": defaultSeconds});
  chrome.storage.sync.set({"words": defaultStopwords});
	location.reload();
}

// Wait until the options.html document is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  chrome.storage.sync.get("seconds", loadOptions);
  chrome.storage.sync.get("words", showBlockwords);
  document.getElementById("saveOptions").addEventListener("click", saveOptions);
  document.getElementById("eraseOptions").addEventListener("click", eraseOptions);
});
