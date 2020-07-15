import { arrOfVideos } from "./data.js";

let index = 0;
let muteValFromStorage = sessionStorage.getItem("isMuted");
console.log("muteValFromStorage", muteValFromStorage);
let muted;
muteValFromStorage == "true" ? (muted = true) : (muted = false);
console.log({ muted });
let contentIndex = parseInt(sessionStorage.getItem("contentNumber"));
let currentVid;

function toggleMuted() {
  console.log("clicked");
  muted = !muted;
  changeMute();
}

function changeMute() {
  let btns = document.querySelectorAll("button");
  let muteText = document.querySelectorAll(".muted-text");
  if (muted) {
    btns.forEach((btn) => {
      btn.classList.add("mute-class");
      btn.innerHTML = ' <i class="fa fa-volume-off"></i>';
    });
    muteText.forEach((mt) => mt.classList.add("mute-class"));
    currentVid.muted = true;
  } else {
    btns.forEach((btn) => {
      btn.classList.remove("mute-class");
      btn.innerHTML = '<i class="fa fa-volume-up"></i>';
    });
    muteText.forEach((mt) => mt.classList.remove("mute-class"));
    currentVid.muted = false;
  }
}

var mySwiper = new Swiper(".swiper-container", {
  on: {
    init: function () {
      let i = contentIndex;
      let allSlides = document.querySelectorAll(".swiper-slide");
      allSlides.forEach((slide) => {
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
mySwiper.setGrabCursor("button");

function playCurrentVid() {
  let allVids = document.querySelectorAll("video");
  allVids.forEach((vid) => vid.pause());
  let currentSlide = mySwiper.slides[index];

  // let currentHeart = currentSlide.querySelector(".modal-trigger");
  // currentHeart.addEventListener("click", () => {
  //   addToFavs(arrOfVideos[contentIndex]);
  //   console.log("click", { local: localStorage.getItem("favVids") });
  // });
  currentVid = currentSlide.querySelector("video");
  muted ? (currentVid.muted = true) : (currentVid.muted = false);
  let currentBtn = currentSlide.querySelector("button");

  currentBtn.addEventListener("click", () => {
    currentVid.muted = !muted;
    toggleMuted();
  });

  currentVid.play();
}

function incrementIndexes(plus) {
  if (plus) {
    contentIndex++;
    index++;
    playCurrentVid();
  } else {
    contentIndex--;
    index--;
    playCurrentVid();
  }
}

mySwiper.on("slidePrevTransitionStart", () => {
  incrementIndexes(false);
});
mySwiper.on("slideNextTransitionStart", () => {
  incrementIndexes(true);

  if (index == 9) {
    sessionStorage.setItem("contentNumber", `${contentIndex}`);
    sessionStorage.setItem("isMuted", `${muted}`);
    window.location.href = "/test2.html";
  }
});

// //favs
// function addToFavs(vid) {
//   // Get the existing data
//   let existing = localStorage.getItem("favVids");

//   // If no existing data, create an array
//   // Otherwise, convert the localStorage string to an array
//   existing = existing ? existing.split(",") : [];

//   // Add new data to localStorage Array
//   existing.push(currentVid);

//   // Save back to localStorage
//   localStorage.setItem("favVids", existing.toString());
// }
