import { arrOfVideosNotRandom } from "./data.js";

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  direction: "vertical",
  loop: false,
});
mySwiper.setGrabCursor();

mySwiper.on("reachEnd", function () {
  mySwiper.appendSlide(
    `<div class='swiper-slide' ">
     
      <video  height="100%" id='${
        mySwiper.activeIndex
      }'  autoplay loop muted playsinline >
            <source src="${
              // arrOfVideos[mySwiper.activeIndex].videoURL
              arrOfVideos[mySwiper.activeIndex].url
            }" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
          </video>
         
  
  
    
         <div id="overlay-text">
            <p class="username">@${
              arrOfVideos[mySwiper.activeIndex].screen_name
            }</p><p class="description">${
      arrOfVideos[mySwiper.activeIndex].description
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
          <a href="${
            arrOfVideos[mySwiper.activeIndex].userUrl
          }" target="_blank">
     <img src="${
       arrOfVideos[mySwiper.activeIndex].avatar
     }" class = "avatar" alt="user"/>
      </a>
       </div >
           <div class="overlay-item">
            <a class="modal-trigger" href="#modal1" > <i class="fas fa-heart"></i></a> <p class ="xnumber">${
              arrOfVideos[mySwiper.activeIndex].favorite_count
            }</p>
           </div >
          <div class="overlay-item">
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftwiktwok.github.io&text=TwikTwok%20-%20twitter%20meets%20tik%20tok.%20Swipe%20through%20the%20best%20videos%20on%20twitter&hashtags=twikTwok">
              <i class="fas fa-share"></i></a>
              <p class ="xnumber">${
                arrOfVideos[mySwiper.activeIndex].retweet_count
              }</p>
             
              </div >
          <div class="overlay-item">
          <a class="modal-trigger" href="#modal1" > <i class="fas fa-comment-dots"></i></a> 
            
              <p class ="xnumber"></p></div >
          </div>
          
   
        
        </div>
    
        </div>`
  );
  // if (mySwiper.activeIndex > 3) {
  //   mySwiper.removeSlide(0);
  //   console.log("removed");
  // }
});
const arrOfVideos = arrOfVideosNotRandom.sort(() => Math.random() - 0.5);

mySwiper.on("slideChange", function () {
  let index = mySwiper.activeIndex - 2;
  let modalURL = document.getElementById("modalURL");
  let creator = document.getElementById("creator");
  let postName = document.getElementById("postName");
  let modalAvatar = document.getElementById("modalAvatar");

  // modalURL.setAttribute("href", `${arrOfVideosNotRandom[index].tweetURL}`);

  // creator.textContent = `@${arrOfVideosNotRandom[index].screen_name}`;
  // postName.textContent = `Video: ${arrOfVideosNotRandom[index].description}`;
  // modalAvatar.src = `${arrOfVideosNotRandom[index].avatar}`;

  if (index === 0) {
    document.getElementById("0").play();
  } else if (index > 10) {
    window.location.href = "/nagScreen.html";
  } else if (index > 0) {
    console.log(arrOfVideos[index].description);
    let prevPrevVid = document.getElementById(index - 2);
    console.log("Before: ", prevPrevVid);
    prevPrevVid.innerHTML = "";
    console.log("After: ", prevPrevVid);
    let prevVid = document.getElementById(index - 1);
    prevVid.pause();

    let currentVid = document.getElementById(index);

    currentVid.play();
    currentVid.classList.add("videoDisplay");
    let nextVid = document.getElementById(index + 1);
    nextVid.pause();
    // nextVid.classList.add("videoDisplayNone");
  }
});

// modal jquery start
$(document).ready(function () {
  console.log("active");
  $(".modal").modal();
});
