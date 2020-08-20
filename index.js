const toggle = false;

function menuOpen() {

  if (this.toggle) {
    document.getElementById('menuLine').innerHTML = '<svg class="icon icon-menu"><use xlink: href="#icon-menu"></use></svg >'
    for (let i = 0; i <= 4; i++) {
      var menu = document.getElementsByClassName('menu-right-item')[i]
      menu.classList.remove("is-show");
    }
    this.toggle = false;

  } else {
    document.getElementById('menuLine').innerHTML = '<svg class="icon icon-cross"><use xlink:href="#icon-cross"></use></svg>'
    for (let i = 0; i <= 4; i++) {
      var menu = document.getElementsByClassName('menu-right-item')[i]
      menu.classList.add("is-show");
    }
    this.toggle = true;

  }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (window.scrollY > 200) {
    var navHeight = document.getElementById('navbar');
    navHeight.style.height = "100px";
    navHeight.style.top = "-20px"
    navHeight.style.borderBottom = "1px solid gray";
  } else {
    var navHeight = document.getElementById('navbar');
    navHeight.style.height = "120px";
    navHeight.style.top = "0px"
    navHeight.style.borderBottom = "1px solid white";
  }

}