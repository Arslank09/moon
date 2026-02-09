gsap.registerPlugin(ScrollTrigger);

// 1. Hero Reveal
gsap.from(".reveal-text", { opacity: 0, y: 50, duration: 1.5, ease: "power4.out" });

// 2. Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:100vh; font-size:${Math.random()*20+15}px; pointer-events:none; z-index:9999;`;
    document.body.appendChild(heart);
    gsap.to(heart, { y: "-110vh", x: (Math.random()-0.5)*200, duration: Math.random()*3+3, onComplete: () => heart.remove() });
}
setInterval(createHeart, 500);

// 3. Message Reveal Animation
gsap.utils.toArray(".reveal-p").forEach(p => {
    gsap.to(p, {
        scrollTrigger: { trigger: p, start: "top 90%" },
        opacity: 1,
        y: 0,
        duration: 1
    });
});

// 4. Parallax Gallery
gsap.utils.toArray(".grid-item img").forEach(img => {
    gsap.to(img, { scrollTrigger: { trigger: img, scrub: 0.5 }, y: -40 });
});