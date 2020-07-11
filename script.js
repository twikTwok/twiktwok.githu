// import { arrOfVideosNotRandom } from "./data.js";
import { arrOfVideosNotRandom } from "./seenData.js";

var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
});
mySwiper.setGrabCursor();

mySwiper.on("reachEnd", function () {
  mySwiper.appendSlide(
    `<div class='swiper-slide' ">
        <video  height="100%" id='${
          mySwiper.activeIndex
        }'autoplay loop muted playsinline >

            <source src="${arrOfVideos[randomNum].url}" type="video/mp4">
      
          Your browser does not support the video tag.
          </video>


      <div id="overlay-text">
            <p class="username">@${
              arrOfVideos[randomNum].screen_name
            }</p><p class="description">${
      arrOfVideos[randomNum].description
    }</p>
        </div>
  
        <div class="banner">
       ${
         mySwiper.activeIndex % 7 === 0
           ? `<p><span class="top-span">#TwikTwok</p></span>`
           : mySwiper.activeIndex % 9
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
          <a href="${arrOfVideos[randomNum].userUrl}" target="_blank">
     <img src="${arrOfVideos[randomNum].avatar}" class = "avatar" alt="user"/>
      </a>
       </div >
           <div class="overlay-item">
            <a class="modal-trigger" href="#modal1" > <i class="fas fa-heart"></i></a> <p class ="xnumber">${
              arrOfVideos[randomNum].favorite_count
            }</p>
           </div >
          <div class="overlay-item">
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftwiktwok.github.io&text=TwikTwok%20-%20twitter%20meets%20tik%20tok.%20Swipe%20through%20the%20best%20videos%20on%20twitter&hashtags=twikTwok">
              <i class="fas fa-share"></i></a>
              <p class ="xnumber">${arrOfVideos[randomNum].retweet_count}</p>
             
              </div >
          <div class="overlay-item">
          <a class="modal-trigger" href="#modal1" > <i class="fas fa-comment-dots"></i></a> 
            
              <p class ="xnumber"></p></div >
          </div>
          
   
        
        </div>
    
        </div>`
  );
});

let randomNum = 0;
const arrOfVideos = arrOfVideosNotRandom.sort(() => Math.random() - 0.5);
mySwiper.on("slideChange", function () {
  let index = mySwiper.activeIndex - 2;

  if (index === 0) {
    document.getElementById("0").play();
  } else if (index > 35) {
    window.location.href = "/appScreen.html";
  } else if (index > 0) {
    randomNum = index;
    let prevPrevVid = document.getElementById(index - 2);
    prevPrevVid.innerHTML = "";
    let prevVid = document.getElementById(index - 1);
    prevVid.pause();

    let currentVid = document.getElementById(index);
    // currentVid.src = arrOfVideos[randomNum].url;

    arrOfVideos[randomNum].seen = true;
    console.log("autoplay?: ", currentVid.autoplay);
    currentVid.play();
    if (currentVid.autoplay) {
      currentVid.muted = false;
    } else {
      currentVid.muted = true;
    }

    currentVid.classList.add("videoDisplay");
    let nextVid = document.getElementById(index + 1);
    nextVid.pause();
  }
});

// modal jquery start
// $(document).ready(function () {
//   console.log("active");
//   $(".modal").modal();
// });
