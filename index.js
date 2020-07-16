// import { arrOfVideos } from "./data.js";
import { vidData } from "./vidData.js";
let arrOfVideos = vidData;
let index = 0;
let muteValFromStorage = sessionStorage.getItem("isMuted");
console.log("muteValFromStorage", muteValFromStorage);
let muted;
muteValFromStorage == "true" ? (muted = true) : (muted = false);
console.log("muted:", muted);
let contentIndex = parseInt(sessionStorage.getItem("contentNumber"));
let currentVid;

function toggleMuted() {
  muted = !muted;

  changeMuteVisually();
  changeMuteSound();
}

function changeMuteVisually() {
  console.log("changeMuteVisually()");
  let btns = document.querySelectorAll("button");
  let muteText = document.querySelectorAll(".muted-text");
  console.log(currentVid);
  if (muted) {
    console.log("add", "muted:", muted);
    btns.forEach((btn) => {
      btn.classList.add("mute-class");
      btn.innerHTML = ' <i class="fa fa-volume-off"></i>';
    });
    muteText.forEach((mt) => mt.classList.add("mute-class"));
  } else {
    console.log("remove", "muted", muted);
    btns.forEach((btn) => {
      btn.classList.remove("mute-class");
      btn.innerHTML = '<i class="fa fa-volume-up"></i>';
    });
    muteText.forEach((mt) => mt.classList.remove("mute-class"));
  }
}

function changeMuteSound() {
  if (muted) {
    currentVid.muted = true;
  } else {
    currentVid.muted = false;
  }
}

var mySwiper = new Swiper(".swiper-container", {
  on: {
    init: function () {
      let i = contentIndex;
      let allSlides = document.querySelectorAll(".swiper-slide");
      allSlides.forEach((slide, index) => {
        slide.innerHTML = `<div class='swiper-slide' >
        <video  height="100%" id='${contentIndex}' autoplay loop muted playsinline >
        
            <source src="${arrOfVideos[i].url}" type="video/mp4">
        
          Your browser does not support the video tag.
          </video>
        
        
        <div id="overlay-text">
        
            <p class="username">@${
              arrOfVideos[i].screen_name
            }</p><p class="description">${arrOfVideos[i].description}</p>
        </div>
        
        <div class="banner">
        ${
          i % 7 === 0
            ? `<p><span class="top-span">#TwikTwok</p></span>`
            : i % 9
            ? `  <p>
             <i class="fa fa-twitter" aria-hidden="true"></i>
             <span class="top-span">x TikTok = <span class="bold-span">TwikTwok</span></span>
           </p>`
            : `<p><span class="top-span"> <i class="fa fa-product-hunt
           " aria-hidden="true"></i> Vote on Product Hunt   </p></span>`
        }
        </div>
        
          <div id="overlay">
   
          <div class="overlay-item">
          <a href="${arrOfVideos[i].userUrl}" target="_blank">
        <img src="${arrOfVideos[i].avatar}" class = "avatar" alt="user"/>
        </a>
        </div >
           <div class="overlay-item">
            <a class="modal-trigger" href="#modal1" > <i class="fas fa-heart"></i></a> <p class ="xnumber">${
              arrOfVideos[i].favorite_count
            }</p>
           </div >
          <div class="overlay-item">
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftwiktwok.github.io&text=TwikTwok%20-%20twitter%20meets%20tik%20tok.%20Swipe%20through%20the%20best%20videos%20on%20twitter&hashtags=twikTwok" target="_blank">
              <i class="fas fa-share"></i></a>
              <p class ="xnumber">${arrOfVideos[i].retweet_count}</p>
             
              </div >
              <div class="overlay-item">
          <button  id="muteBtn" class="mute-btn mute-class">
            
                <i class="fa fa-volume-off"></i>
           
          </button>
          <p class ="xnumber muted-text mute-class">Sound</p>
            </div>
          
        
        
        </div>
        
        </div>
  
        `;

        i++;
      });
    },
  },
  direction: "vertical",
});

playCurrentVid();
changeMuteVisually();
mySwiper.setGrabCursor("button");

function playCurrentVid() {
  let allVids = document.querySelectorAll("video");
  allVids.forEach((vid) => vid.pause());
  let currentSlide = mySwiper.slides[index];
  currentVid = currentSlide.querySelector("video");
  muted ? (currentVid.muted = true) : (currentVid.muted = false);

  let currentBtn = currentSlide.querySelector("button");

  currentBtn.addEventListener("click", handleMuteClick);
  currentVid.play();
  //fav
  let currentHeart = currentSlide.querySelector(".modal-trigger");
}

function handleMuteClick() {
  toggleMuted();
}

function incrementIndexes(plus) {
  if (plus) {
    contentIndex++;
    index++;
    playCurrentVid();
    console.log("current value of muted:", muted);
  } else {
    contentIndex--;
    index--;
    playCurrentVid();
    console.log("current value of muted:", muted);
  }
}

mySwiper.on("slidePrevTransitionStart", () => {
  incrementIndexes(false);
});
mySwiper.on("slideNextTransitionStart", () => {
  incrementIndexes(true);

  if (index == 9) {
    sessionStorage.setItem("contentNumber", `${contentIndex + 1}`);
    sessionStorage.setItem("isMuted", `${muted}`);
    window.location.href = "/test2.html";
  }
});

//splash
var currentLocation = window.location;
console.log(
  "currentLocation",
  currentLocation,
  "window.location.href ",
  window.location.href
);
if (
  currentLocation.pathname == "/" ||
  currentLocation.pathname == "/index.html"
) {
  const splash = document.querySelector(".splash");
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      splash.classList.add("display-none");
    }, 1500);
  });
} else {
  console.log("no splash screen");
}
