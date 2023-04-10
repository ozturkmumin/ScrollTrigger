// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 2, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".right", { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" });
// gsap.from(".left", { duration: 1, delay: 1.5, x: "-100%" });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });
// gsap.fromTo(".button", { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 });

//gsap.to ve gsap.from arasındaki fark gsap.to => eğer seçtiğimiz bir elemente gitmesine istiyorsak to ,
//o elementden başlamasını istiyorsak gsap.from yapmalıyız.
gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
     x: 1200,
     duration: 3,
     scrollTrigger: {
          trigger: ".square",
          start: "top 20%",

          //ToogleActions ile tekrar çalışmasını ayarlayabiliriz
          toggleActions: "restart reverse none none",
          scrub: 4,
          pin: true,
          pinSpacing: false,
          //pinspacing start ve end arasındaki boşlukta sticky gibi hareket eder end de durur
          //Birinci parametre tekrar başlaması ,
          //İkinci parametre tekrar geri gitmesini yazdık,
          //İkinci parametreye pause değeride verebiliriz,
          //Üçüncü parametre tekrar çalıştırmamızı sağlar

          // end: () => `+=${document.querySelector(".square").offsetHeight}`,
          markers: true,
          toggleClass: "red",
     },
});
// Zaman çizelgesine sahip olmak
const tl = gsap.timeline();
tl.to(".square", { x: 500, duration: 2 }).to(".square", { y: 200, duration: 3 }).to(".square", { x: 0, duration: 2 });
