document.addEventListener("DOMContentLoaded", function() {
    horizontal_scroll_animation();
    color_changer();
});



function horizontal_scroll_animation(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".book_section",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            markers: true // Set to false or remove in production
        },
        xPercent: -513,
        ease: "power4.inOut",
    });
    console.log("horizontal_scroll_animation")
}

function color_changer() {
    const containers = document.querySelectorAll('.color_manager');
    const body = document.body;

    containers.forEach(container => {
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            onEnter: () => changeColor(container),
            onEnterBack: () => changeColor(container),
            markers: true // Set to false or remove in production
        });
    });

    function changeColor(container) {
        const color = container.getAttribute('data-color');
        body.setAttribute('theme', color);
        console.log("color_changer")
    }
}