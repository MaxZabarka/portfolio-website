// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

window.onload = () => {
  //Remove loading overlay
  const backgroundOverlayElement = document.querySelector(
    ".background-overlay"
  );
  backgroundOverlayElement.style = "background-color: rgba(0,0,0,0.6);";
  backgroundOverlayElement.style.zIndex = "1";

  setTimeout(() => {
  //name animation
  document.querySelector(".name").style.opacity = "1"
  anime
    .timeline()
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml11 .line",
      translateX: [
        0,
        document.querySelector(".ml11 .letters").getBoundingClientRect().width +
          10,
      ],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".line",
      opacity: 0,
      duration: 700,
      easing: "easeOutExpo",
    });
}, 300);

//button and developer animation
setTimeout(() => {
  const nameTitleElement = document.querySelector(".name-title")
  const buttonElement = document.querySelector("button")

  //dev animation
  anime.timeline().add({
    targets: nameTitleElement,
    opacity: [0, 1],
    easing:"linear",
    duration: 1200,
  });
  //button animation
  anime.timeline().add({
    targets: buttonElement,
    opacity: [0, 1],
    easing:"linear",
    duration: 700,
    easing: "easeOutExpo",

  });
}, 1000);
};