gsap.registerPlugin(ScrollTrigger);
// Eğer markers start pozisyonuna gelir ise box-red clası aktif olacaktır
// ScrollTrigger.create({
//      trigger: ".box",
//      start: "top 80%",
//      end: "top 50%",
//      markers: true,
//      toggleClass: "box-red",
// });

ScrollTrigger.create({
     markers: true,
     start: "top 6%",
     trigger: ".panel",
     toggleClass: { targets: "nav", className: "nav-active" },
});
