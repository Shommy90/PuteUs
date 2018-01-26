
  function scroll() {
    var top = document.getElementById('nav');
    var yPos = window.pageYOffset;

    if (yPos > 50) {
      top.style.padding = "0 0 0 0";
      top.style.backgroundColor = "#fff";
      top.style.boxShadow = "0 2px 15px rgba(0,0,0,0.2)";
    } else {
      top.style.padding = "15px 0 0 0";
      top.style.backgroundColor = "transparent";
      top.style.boxShadow = "none";
    }
  }

  window.addEventListener("scroll", scroll);
