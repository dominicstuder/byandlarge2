if (typeof window !== `undefined`) { 
  var body = document.querySelector("body");
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      body.classList.add("preloader_ready");
      body.classList.add("loaded");
      setTimeout(function () {
        body.classList.remove("preloader_active");
        body.classList.remove("preloader_ready");
        body.classList.remove("loaded");
      }, 1000);
    }
  };
}