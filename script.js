
// NAV
let hoverCircle = document.querySelector(".hover")
let navIcon = document.querySelectorAll("nav menu a")

function hover(index, left) { 
    navIcon[index].addEventListener("mouseover", () => {
      hoverCircle.style.left = left
    })
    navIcon[index].addEventListener("mouseout", () => {
      hoverCircle.style.left = "-84%"
    })
} 
    hover(0, "-84%")
    hover(1, "-28.5%")
    hover(2, "27.5%")
    hover(3, "81.5%")

// NAV
// SECTION1 SLIDER
let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
    // s1
    let section1 = document.querySelector(".section1")
    let sectionContain = document.querySelectorAll(".section1 .contain")
    let section1slider = document.querySelector(".section1 .slider")
    let contentImg = document.querySelector(".section1 .content img")
        section1slider.addEventListener("click", () => {
          section1.style.flexDirection = "column-reverse"
          // sectionContain.forEach((i) => {
          //   i.style.width = "100%"
          // })
          sectionContain[1].style.width = "100%"
          sectionContain[0].style.width = "100%"
          sectionContain[0].classList.add("active")
          contentImg.style.width = "40vw"
        })

    // s3
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });