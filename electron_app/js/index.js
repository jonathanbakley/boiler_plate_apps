(function ready(start) {
  if (document.readyState != "loading") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }

  function start() {
    console.log("Welcome To Electron");
  }
})();
