// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 2, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".right", { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" });
// gsap.from(".left", { duration: 1, delay: 1.5, x: "-100%" });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });
// gsap.fromTo(".button", { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 });
gsap.registerPlugin(ScrollTrigger);
gsap.to(".footer", {
     y: 500,
     duration: 3,
     scrollTrigger: ".footer",
});
