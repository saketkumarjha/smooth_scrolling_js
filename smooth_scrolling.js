document.querySelectorAll("nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//if navbar has more element then use following code

//add eventlistener to common parent element
//determine which element originted the event
document.querySelector("nav_link").addEventListener("click", function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
