// The extension is running this script on every page.
// You can add any JavaScript you want here.

function hidepage() {
  var div_elem = document.createElement('div');
  div_elem.style.cssText = 'position: fixed; width: 100%; height: 100%; opacity: 0.9; z-index: 1000; background: #000';
  div_elem.id = "random_IO0_3279";

  var func = "function RMthisElement(){ document.getElementById('random_IO0_3279').remove(); }";
  var func_call = " setTimeout( RMthisElement, 10000); ";
  var script_elem = document.createElement('script');
  script_elem.type = "text/javascript";
  script_elem.innerHTML = func + func_call;

  var center_div = document.createElement('div');
  center_div.style.cssText = "font-size: xx-large; margin: 0; color: silver; top: 50%; left: 35%; position: absolute;"
  center_div.innerHTML = "Wait and relax 10 seconds. <br /> Take a deep breath."

  div_elem.appendChild(center_div);
  div_elem.appendChild(script_elem);
  document.body.prepend(div_elem);
}

hidepage();
