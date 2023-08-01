document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
}

/* To Disable Inspect Element */
$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

//console blocking
Object.defineProperty(window, "console", {
    value: console,
    writable: false,
    configurable: false
});

var i = 0;
function showWarningAndThrow() {
    if (!i) {
        setTimeout(function () {
            console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
        }, 1);
        i = 1;
    }
    throw "Console is disabled";
}

var l, n = {
        set: function (o) {
            l = o;
        },
        get: function () {
            showWarningAndThrow();
            return l;
        }
    };
Object.defineProperty(console, "_commandLineAPI", n);
Object.defineProperty(console, "__commandLineAPI", n);

// detect dev tools -->
!function() {
  function detectDevTool(allow) {
    if(isNaN(+allow)) allow = 100;
    var start = +new Date(); // Validation of built-in Object tamper prevention.
    debugger;
    var end = +new Date(); // Validates too.
    //alert("Hmm");
    if(isNaN(start) || isNaN(end) || end - start > allow) {
      // input your code here when devtools detected.
      window.location.reload();
      //window.attachEvent('onmousemove', location.reload.bind(location));
      //window.addEventListener('mousemove', location.reload.bind(location));
      document.querySelector("body").style.cursor = "none";
      document.querySelector("body").style.background = "#fff";
      window.location.href = "https://www.google.com/";
    }
  }
  if(window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      document.querySelector("body").style.cursor = "none";
      document.querySelector("body").style.background = "#fff";
     window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
      //window.attachEvent('onmousemove', location.reload.bind(location));
     // window.addEventListener('mousemove', location.reload.bind(location));
      document.querySelector("body").style.pointerEvents = "none";
     // document.addEventListener('contextmenu', event=> event.preventDefault()); 
     window.location.href = "https://www.google.com/";
      window.location.reload();
    } else {
        setTimeout(argument.callee, 0);
    }
  } else {
    window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
    //$('body').css('cursor', 'none');
    document.querySelector("body").style.cursor = "block";


  }
}();