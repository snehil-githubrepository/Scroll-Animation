let bgImg = document.querySelector(".img-container");
//Registering scroll Trigger plugin to GSAp
gsap.registerPlugin(ScrollTrigger);
//now animate

gsap.fromTo(
  bgImg,
  {
    clipPath: "circle(0% at 77% 40%)",
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    //We want this animation on scroll
    scrollTrigger: {
      trigger: bgImg,
      scrub: 1,
      start: "top center",
      end: "top center-=200",
    },
  }
);
