document.addEventListener("DOMContentLoaded", function () {
    loadingAnimation();
});

function horizontal_scroll_animation() {
  const slides = document.querySelector(".slides");

  function getScrollAmount() {
    let slidesWidth = slides.scrollWidth;
    return -(slidesWidth - window.innerWidth);
  }

  const tween = gsap.to(slides, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".book_container",
    start: "top top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: false,
  });
}

function color_changer() {
  const containers = document.querySelectorAll(".color_manager");
  const body = document.body;

  containers.forEach((container) => {
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      onEnter: () => changeColor(container),
      onEnterBack: () => changeColor(container),
      markers: false, // Set to false or remove in production
    });
  });

  function changeColor(container) {
    const color = container.getAttribute("data-color");
    body.setAttribute("theme", color);
    // console.log("color_changer");
  }
}

function navelement() {
  const button = document.getElementById("nav_button");
  button.addEventListener("click", () => {
    const nav = document.getElementById("mobile_nav");
    nav.classList.toggle("hidden");
  });
}

class DragScroll {
  constructor(obj) {
    this.el = document.querySelector(obj.el);
    this.wrap = document.querySelector(obj.wrap);
    this.items = document.querySelectorAll(obj.item);
    this.init();
  }

  init() {
    this.progress = 0;
    this.speed = 0;
    this.oldX = 0;
    this.x = 0;
    this.playrate = 0;
    this.dragging = false;
    this.startX = 0;

    this.bindings();
    this.events();
    this.calculate();
    this.raf();
  }

  bindings() {
    [
      "events",
      "calculate",
      "raf",
      "handleWheel",
      "move",
      "handleTouchStart",
      "handleTouchMove",
      "handleTouchEnd",
    ].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }

  calculate() {
    this.progress = 0;
    this.wrapWidth = Array.from(this.items).reduce(
      (total, item) => total + item.clientWidth,
      0
    );
    this.maxScroll = this.wrapWidth - this.el.clientWidth;
  }

  handleWheel(e) {
    this.progress += e.deltaY;
    this.move();
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.dragging = true;
    this.startX = e.clientX || e.touches[0].clientX;
  }

  handleTouchMove(e) {
    if (!this.dragging) return;

    const x = e.clientX || e.touches[0].clientX;
    this.progress += (this.startX - x) * 2.5;
    this.startX = x;
    this.move();
  }

  handleTouchEnd() {
    this.dragging = false;
  }

  move() {
    this.progress = Math.max(0, Math.min(this.progress, this.maxScroll));
  }

  events() {
    window.addEventListener("resize", this.calculate);
    window.addEventListener("wheel", this.handleWheel);

    this.el.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);

    window.addEventListener("mousedown", this.handleTouchStart);
    window.addEventListener("mousemove", this.handleTouchMove);
    window.addEventListener("mouseup", this.handleTouchEnd);

    document.addEventListener("mouseleave", this.handleTouchEnd);
  }

  raf() {
    this.x = this.x + (this.progress - this.x) * 0.1;
    this.playrate = this.x / this.maxScroll;
    this.wrap.style.transform = `translateX(${-this.x}px)`;

    requestAnimationFrame(this.raf);
  }
}

function now_trending_slider() {
  const scroll = new DragScroll({
    el: ".slider",
    wrap: ".slider-wrapper",
    item: ".slider-item",
  });

  const animateScroll = () => {
    requestAnimationFrame(animateScroll);
    scroll.raf();
  };

  animateScroll();
}

function swiper_var_code() {
  var swiper = new Swiper(".card_slider", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function textAnimation(){
    
    var text = document.getElementById("home-text");
    
    const textarr = [
      "Latest Release collection",
      "Save Up to 45% Off Bestseller",
      'Get the best Books ',
    ];
    
    function changetext() {
      text.innerHTML = textarr[Math.floor(Math.random() * textarr.length)];
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 1,
          opacity: 1,
          ease: "power2",
          y: 0,
        }
      );
    }
    
    changetext();
    
    setInterval(changetext, 3000);
}

function loadingAnimation(){

    splitspan();
    
    gsap.from('.loading-text span', {
        y:50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger:0.15,
        onComplete: init
    })

    setTimeout(() => {
        
        
    }, 7000);
}

function init() {
    document.querySelector(".loader").classList.add("hidden");
    document.querySelector(".main").classList.remove("hidden");
    horizontal_scroll_animation();
    color_changer();
    navelement();
    now_trending_slider();
    swiper_var_code();
    textAnimation();
}

function splitspan(){
    var textelem = document.querySelector(".loading-text");
    var text = textelem.textContent;
    var textarr = text.split("");
    var clutter =""
    textarr.forEach((letter) => {
        clutter += `<span class='inline-block julius-sans-one-regular' >${letter}</span>`;
    });
    textelem.innerHTML = clutter;
}
