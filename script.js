const arrOfVideos = [
  {
    url:
      "https://video.twimg.com/ext_tw_video/1246923580534706178/pu/vid/320x566/nJp09vJvBa8P0BKx.mp4?tag=10",
    username: "The World of Funny",
    avatar:
      "https://pbs.twimg.com/profile_images/821849411991044096/lQFa_Vly_400x400.jpg",
    linkToProfile: "https://twitter.com/theworldoffunny",
    description:
      "These kids were recording skateboard tricks when these two wasted guys were walking home from the bar....",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1154368837929844736/pu/vid/480x600/INsYW1gFn9cm4jaa.mp4?tag=10",
    username: "The World of Funny",
    avatar:
      "https://pbs.twimg.com/profile_images/821849411991044096/lQFa_Vly_400x400.jpg",
    linkToProfile: "https://twitter.com/theworldoffunny",
    description: "WAIT FOR ME!",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1254156157200949248/pu/vid/720x720/HwQRUy-B604hq9Ce.mp4?tag=10",
    username: "Funny Vines",
    avatar:
      "https://pbs.twimg.com/profile_images/821849411991044096/lQFa_Vly_400x400.jpg",
    linkToProfile: "https://twitter.com/FunnyVines",
    description: "Watching him not get his way is satisfying",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1260290729533898752/pu/vid/720x1280/DzOvST4moilhcwYL.mp4?tag=10",
    username: "Funny Vines",
    avatar:
      "https://pbs.twimg.com/profile_images/1091782935584227328/BrW03wFQ_400x400.jpg",
    linkToProfile: "https://twitter.com/FunnyVines",
    description: "WAIT FOR IT",
  },
  {
    url:
      " https://video.twimg.com/ext_tw_video/807291203523870725/pu/vid/360x640/OME7TDdJqn42D83G.mp4",
    username: "Funny Vines",
    avatar:
      "https://pbs.twimg.com/profile_images/1091782935584227328/BrW03wFQ_400x400.jpg",
    linkToProfile: "https://twitter.com/FunnyVines",
    description: "I’m posting this everytime I see it",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1247344730469363712/pu/vid/360x450/EjipZIsZGLs-Pog-.mp4?tag=10",
    username: "Nelk",
    avatar:
      "https://pbs.twimg.com/profile_images/836717793454206976/iydWR-ls_400x400.jpg",
    linkToProfile: "https://twitter.com/NelkFilmz",
    description: "This is why dad left you",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1265313800611397633/pu/vid/480x480/6kDWC-loWCaX1uJc.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1174076967207018497/pu/vid/220x400/A1e6jNzyOJ0QgFgG.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1264174507037728768/pu/vid/320x320/vL67LyaPxr88VfPM.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1265313800611397633/pu/vid/480x480/6kDWC-loWCaX1uJc.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1264267812668870658/pu/vid/320x320/h8m3ifzlcln90igR.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1254634762376888322/pu/vid/320x692/T6MqoSAQovzSsdbd.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1264267812668870658/pu/vid/320x320/h8m3ifzlcln90igR.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1264836061387206656/pu/vid/320x400/AT7F6kmggxCFNVeU.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
  {
    url:
      "https://video.twimg.com/ext_tw_video/1264308237429624832/pu/vid/320x568/xQdkKD_Dsf7lGzim.mp4?tag=10",
    username: "mralistairgreen",
    avatar:
      "https://pbs.twimg.com/profile_images/1189516223463280642/VDfDiyUh_400x400.jpg",
    linkToProfile: "https://twitter.com/mralistairgreen",
    description: "trying out a bit",
  },
];

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  direction: "vertical",
  loop: false,
});

mySwiper.on("reachEnd", function () {
  mySwiper.appendSlide(
    `<div class='swiper-slide' ">
     
      <video  height="100%" id='${
        mySwiper.activeIndex
      }'  autoplay loop muted playsinline >
            <source src="${
              arrOfVideos[mySwiper.activeIndex].url
            }" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
          </video>
  
  
  
    
         <div id="overlay-text">
            <p class="username">@${
              arrOfVideos[mySwiper.activeIndex].username
            }</p><p class="description">${
      arrOfVideos[mySwiper.activeIndex].description
    }</p>
        </div>
  
  
  
          <div id="overlay">
        
          <div class="overlay-item">
          <a href="${
            arrOfVideos[mySwiper.activeIndex].linkToProfile
          }" target="_blank">
     <img src="${
       arrOfVideos[mySwiper.realIndex].avatar
     }" class = "avatar" alt="user"/>
      </a>
       </div >
           <div class="overlay-item">
            <a class="modal-trigger" href="#modal1" > <i class="fas fa-heart"></i></a> <p class ="xnumber">100</p>
           </div >
          <div class="overlay-item">
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftwiktwok.github.io&text=TwikTwok%20-%20twitter%20meets%20tik%20tok.%20Swipe%20through%20the%20best%20videos%20on%20twitter&hashtags=twikTwok">
              <i class="fas fa-share"></i></a>
              <p class ="xnumber">100</p>
             
              </div >
          <div class="overlay-item">
          <a class="modal-trigger" href="#modal1" > <i class="fas fa-comment-dots"></i></a> 
            
              <p class ="xnumber">100</p></div >
          </div>
   
         
        </div>
    
        </div>`
  );
});

mySwiper.on("slideChange", function () {
  let index = mySwiper.activeIndex - 2;

  if (index === 0) {
    document.getElementById("0").play();
  } else if (index > 0) {
    let prevVid = document.getElementById(index - 1);
    prevVid.pause();

    let currentVid = document.getElementById(index);
    currentVid.play();
    let nextVid = document.getElementById(index + 1);
    nextVid.pause();
  }
});

// modal jquery start
$(document).ready(function () {
  console.log("active");
  $(".modal").modal();
});
