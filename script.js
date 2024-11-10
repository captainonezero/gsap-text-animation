// Set initial properties
gsap.set("svg path", {
  strokeDasharray: 300,
  strokeDashoffset: 300,
  stroke: "#cde4f2",
  fill: "transparent",
});

gsap.set("#textSVG", {
  transformOrigin: "50% 50%", // Center the SVG
});

const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
});

// Text scale up animation
tl.fromTo(
  "#textSVG",
  { scale: 0 },
  { duration: 3, scale: 6, ease: "slow(0.5, 0.8)" }
).from(
  "#textSVG",
  {
    duration: 3,
    opacity: 0,
    ease: "slow(0.5, 0.8, true)",
    stagger: 2,
    onComplete: resetSVG,
  },
  "<"
);

// Text stroke and fill animation
tl.to(
  "svg path",
  {
    strokeDashoffset: 0,
    duration: 1,
    ease: "power1.inOut",
    onComplete: () => {
      // Fill color after the animation
      gsap.to("svg path", {
        fill: "#cde4f2",
        duration: 0.4,
      });
    },
  },
  "0"
);

// Reset properties to initial values
function resetSVG() {
  gsap.set("svg path", {
    strokeDasharray: 300,
    strokeDashoffset: 300,
    fill: "transparent",
  });
}
