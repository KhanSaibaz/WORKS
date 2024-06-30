const typed = new Typed('.auto-type',{
    strings:['IN 1960 SHRI MADANLALJI OPENED THE BRANCH OF HIS BUSINESS, IN MUMBAI - A CITY OF OPPORTUNITIES AND FINANCE.',
        'IN 1967, HE WOUNDED UP HIS BUSINESS IN AJMER AND SHIFTED TO MUMBAI COMPLETELY, FOR A BRIGHTER FUTURE. HE WAS ASSISTED BY HIS ELDER 2 SONS WHILE THE OTHER 3 SONS CONTINUED THEIR EDUCATION. ', 'UNDER THE ASTUTE LEADERSHIP AND ADMINISTRATIVE SKILLS OF MADANLALJI, THE BUSINESS BECAME POPULAR NATIONWIDE.',
        'IT WAS 1975 THE YOUNGEST SON OF MADANLALJI - SHRI RAMESH JAIN, FOUNDER OF RISHAB APPAREL PVT. LTD. - JOINED THE COMPANY. WITH THE INTRODUCTION OF SHRI RAMESH JAIN, THE COMPANY BEGAN TO DABBLE IN MULTIPLE PRODUCTS AND MARKETS BEGAN INTERNATIONAL TRADING.',
        'MR. RISHAB JAIN, SON OF SHRI RAMESH JAIN AND CURRENT EXECUTIVE DIRECTOR, JOINED THE BUSINESS AT A VERY YOUNG AGE OF 19 YEARS AND HELPED IT RECOVER AT A TIME OF CRISIS.',
        'IN THE YEAR 2018 OUR COMPANY WITNESSED JOINING OF A FAMILY MEMBER FROM THE FOURTH GENERATION OF HIS FAMILY TREE.',
        'IN THE FUTURE WE LOOK FORWARD TO GROW OUR RISHAB WORLD FAMILY CONSISTENTLY  WITH A CONSTANT SEARCH FOR NEW ASSOCIATIONS AND INNOVATIONS LEADING TO NEW OPPORTUNITES.'
    ]
    ,
    typedSpeed:70,
    typedelete:70,
    loop:true
})



  


document.addEventListener('DOMContentLoaded', function(){
    gsap.to(".top-sticky",{
        scrollTrigger:{
            trigger:'.top-sticky',
            start: 'top top',
            end:()=>"+=" + 
            (window.innerHeight + 
                document.querySelector(".bottom-sticky").offsetWidth + 8.5 
            ),
            scrub:1,
            pin:true,
        },
        // y:250,
        y: 50,
        // scale:0.75,
        scale: 0.75,
        rotation: -15,
        ease: 'power3.out'
    });
    
})

gsap.fromTo('bottom-sticky',{
    x:-100,
    scale: .1,
    rotation: 25,
},


{
    scrollTrigger:{
        trigger:'.bottom-sticky',
        start: 'top 200%',
        end:'top 50%',
        scrub:1,
    },
    x:0,
    scale:1,
    rotation:0,
    ease:"power3.out",

})


document.addEventListener('DOMContentLoaded', function(){
    // gsap.to(".top-sticky",{
    //     scrollTrigger:{
    //         trigger:'.top-sticky',
    //         start: 'top top',
    //         end:()=>"+=" + 
    //         (window.innerHeight + 
    //             document.querySelector(".bottom-sticky").offsetWidth + 8.5 
    //         ),
    //         scrub:1,
    //         pin:true,
    //     },
    //     // y:250,
    //     y: 50,
    //     // scale:0.75,
    //     scale: 0.75,
    //     rotation: -15,
    //     ease: 'power3.out'
    // });
    
})

// gsap.fromTo('#main_toggle_div',{
//     // x:-200,
//     y:-200,
//     scale: 0.2,
//     rotation: 1,
// },


// {
//     scrollTrigger:{
//         trigger:'#main_toggle_div',
//         start: 'top 200%',
//         end:'top 20%',
//         scrub:1,
//     },
//     x:0,
//     y:-100,
//     scale:1,
//     rotation:0,
//     ease:"power3.out",

// })


// ScrollTrigger.create({
//     animation: gsap.from('.btm_since',{
//         y:'50vh',
//         scale:6,
//         yPercent: -50,
//     }),
//     scrub:true ,
//     trigger:'.bottom_image',
//     start:'top bottom',
//     endTrigger:'.bottom_image',
//     end:'top center',

// })



const media_textt = new SplitType('#media_textt');
gsap.from('.char',{
    y:0,
    stagger:.7,
    delay:0.2,
    duration:.1,
    opacity:0,

    scrollTrigger:{
        trigger:"#media_textt",
        scrub:5,
        start:'top 100%',
        end:'top 10%'
        
    }
})



// const translate = document.querySelector('.translate');
// const translateWidth = translate.offsetWidth;
// const amountToScroll = translateWidth - window.innerWidth;


// const tween = gsap.to(translate,{
//     x:-amountToScroll,
//     duration:3,
//     ease:'none'
// });

// ScrollTrigger.create({
//     trigger:'.scroller_wrap',
//     start:'top 20%',
//     end: "+=" + amountToScroll,
//     pin:true,
//     animation:tween,
//     scrub:1,
//     markers:true
// })



// const el = document.querySelector('.slide_img');

// const elWidth = el.offsetWidth;
// const windowWidth = window.innerWidth;


// const mouseX = 0;
// const prevMouseX = 0;

// const skewTarget = 0;
// const translateTarget = 0;

// const skewWithEasing = 0;
// const translateWithEasing = 0;


// const skewEasingFactor = 0.1;
// const translateEasingFactor= 0.05;


// window.addEventListener('mousemove', handleMouseMove);

// window.addEventListener('resize',handleWithResize);


// function handleMouseMove(e){
//     mouseX= e.pageX;
// }

// function handleWithResize(e){
//     elWidth = el.offsetWidth;
//     windowWidth = window.innerWidth;

// }

// function lerp(start, end ,factor){
//     return (1-factor) * start + factor * end;
// }

// function animateMe(){
//     skewTarget = mouseX - prevMouseX;
//     prevMouseX = mouseX;

//     translateTarget = (elWidth- windowWidth) / windowWidth * mouseX * -1 ;
    
//     skewWithEasing = lerp(skewWithEasing ,skewTarget , skewEasingFactor);

//     skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing)-75) ,75);




//     translateWithEasing = lerp(

//         translateWithEasing,
//         translateTarget,
//         translateEasingFactor
//     );

//     el.getElementsByClassName.transform = `trasnlateX(${translateWithEasing}px)
//     skew(${skewWithEasing}deg)
//     `;

//     window.requestAnimationFrame(animateMe);
// }

// window.requestAnimationFrame(animateMe)



const timelines = gsap.timeline({scrollTrigger:{
    trigger:'#main_class',
    scroller:'body',
    // markers:true,
    start:' 20% 30%',
    end:"10% 50%",
    pin:true,
    scrub: 3,
}})


timelines.to("#main_top",{
    top:'-60%',
    opacity:1,

},'a')

timelines.to("#main_bottom",{
    bottom:"-50%",
    opacity:1,

},'a')

timelines.to('#text_world',{
    marginTop:"10rem"
},'a')



gsap.from('.world',{
    x:-100,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:'.world',
        scrub:3,
        x:100,
    }
})


gsap.from('.media_since',{
    x:100,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:'.media_since',
        scrub:3,
        x:-200,
    }
})

gsap.to('.animate_text h2 ',{
    x:10,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:'.animate_text',
        scrub:3,
        x: 10,
    }
})

gsap.to('.beta_text p ',{
    y:-70,
    duration:1,
    delay:1,
    opacity:1,
    scrollTrigger:{
        trigger:'.beta_text',
        scrub:3,
        x: 100,
        start:"center 20%"
    }
})


 



// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 250 video lessons






// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 250 video lessons




// gsap.to()... infinity and beyond!
// For more check out greensock.com

const rows = document.querySelectorAll(".cb-tagreel-row");

rows.forEach(function (e, i) {
	let row_width = e.getBoundingClientRect().width;
	let row_item_width = e.children[0].getBoundingClientRect().width;
	let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
	let x_translation = initial_offset * -1;
	// console.log(e.children[0].clientWidth);
	console.log(x_translation);

	gsap.set(e, {
		xPercent: `${initial_offset}`
	});

	let duration = 5 * (i + 1);

	var tl = gsap.timeline();

	tl.to(e, {
		ease: "none",
		duration: duration,
		xPercent: 0,
		repeat: -1
	});
});

// ScrollTrigger.create({
//             trigger: "section",
//             start: "top top",
//             end: "bottom",
//             markers: true,
//             onEnter: () => {
//               tl.play();
//             },
//             onLeave: () => {
//               tl.pause()
//             },
//             onUpdate: self => {
//                     tl.timeScale(self.getVelocity() / 100);
//               direction = self.direction

//               console.log(direction)
//             }
//         });







gsap.registerPlugin(ScrollTrigger);

const additionalX = { val: 0 };
let additionalXAnim;
let offset = 0;
let originalImages = gsap.utils.toArray(".image24");
const container = document.querySelector(".gallerytok");
const sliderWidth = container.offsetWidth;

// DUPLICATE IMAGES FOR LOOP
originalImages.forEach((image) => {
  var clone = image.cloneNode(true);
  container.appendChild(clone);
});

let images = gsap.utils.toArray(".image24");

// SET ANIMATION
images.forEach((item) => {
  gsap.to(item, {
    x: "-=" + Number(sliderWidth / 2),
    duration: 30,
    repeat: -1,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => {
        offset += additionalX.val;
        x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
        return x;
      })
    }
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: ".gallerytok",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalXAnim) additionalXAnim.kill();
      additionalX.val = -velocity / 2000;
      additionalXAnim = gsap.to(additionalX, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalXAnim) additionalXAnim.kill();
      additionalX.val = -velocity / 4000;
      additionalXAnim = gsap.to(additionalX, { val: 0 });
    }
  }
});













// sdkljfklsdjfkljsdklf











let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
    gsap.set(cursor2, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
  });
});


































// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 250 video lessons


const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 13,
	ease: "power3.out",
  pin:true
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"10% 90%",
  pin:true,
	end: () => `+=${getScrollAmount() * 1}`,
	animation:tween,
	scrub:40,
	invalidateOnRefresh:true,
  markers:false
})



// SHAPE START 





const { to, set, timeline, registerPlugin } = gsap

registerPlugin(ScrollTrigger)

const phoneElem = document.querySelector('#phone')
const timeElem = phoneElem.querySelector('.time')
const contentElem = phoneElem.querySelector('.contentflow')
const articles = contentElem.querySelectorAll('article')

setTime(timeElem)
setInterval(() => setTime(timeElem), 5000)

articles.forEach((article, index) => {
    roll(contentElem, article, articles, index)
})

contentElem.addEventListener('scroll', e => {
    if(contentElem.scrollTop > 2550) {
        contentElem.scrollTop = 2550
    }
})

function roll(contentflow, article, articles, index) {
    let animation = timeline().to(article, {
        '--clip': `${article.offsetHeight + 112}px`,
        '--compact-s': 1,
        '--compact-o': 1,
        duration: 1,
        delay: .05,
        ease: 'none'
    }).to(article, {
        '--border-radius-h': '180px',
        '--border-radius-v': '20px',
        repeat: 1,
        yoyo: true,
        duration: .15,
        onStart() {
            article.style.overflow = 'hidden'
        },
        onComplete() {
            article.style.overflow = 'visible'
        }
    }, 0).to(article, {
        '--article-r': getComputedStyle(article).getPropertyValue('--to-article-r'),
        '--article-x': getComputedStyle(article).getPropertyValue('--to-article-x'),
        '--article-y': getComputedStyle(article).getPropertyValue('--to-article-y'),
        duration: .15
    })

    if(index === 0) {
        animation.to(phoneElem, {
            '--headline-y': '-28px',
            duration: .3
        }, 1.05)
    }

    if(index === 1) {
        animation.to(articles[index - 1], {
            '--article-y': '-64px',
            '--article-r': '-2deg',
            duration: .15
        }, 1.08)
    }

    if(index === 2) {
        animation.to(articles[index - 2], {
            '--article-y': '-70px',
            duration: .15
        }, 1.14)
        animation.to(articles[index - 1], {
            '--article-y': '-42px',
            '--article-r': '-2deg',
            duration: .15
        }, 1.08)
    }

    if(index === articles.length - 1) {
        animation.to(phoneElem, {
            '--empty-mask': '0%',
            duration: .3
        })
    }

    return ScrollTrigger.create({
        animation,
        trigger: article,
        scroller: contentflow,
        scrub: true,
        // start: `top top+=184`,
        // end: `bottom top+=112`
        start:`top top+= 0`,
        end:`bottom top+= 134`
    })
}

function setTime(elem) {
    elem.textContent = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
    })
}

// Keep same progress after resize (Thanks to https://codepen.io/ZachSaucier)
const progressST = ScrollTrigger.create({
    scroller: contentElem,
    start: 0,
    end: 2550
    // end:3000
})

let oldProgress

ScrollTrigger.addEventListener('refreshInit', () => {
    oldProgress = progressST.progress
    contentElem.scrollTop = 0
})

ScrollTrigger.addEventListener('refresh', () => {
    progressST.scroll(oldProgress * 2550)
})



























// TESTI NO MIAL 



(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  
  
  





















// gallery 


