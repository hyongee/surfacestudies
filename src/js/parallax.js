import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// プラグインを登録
gsap.registerPlugin(ScrollTrigger);

// スクロールで要素を動かす
gsap.to(".overall-image > img", {
    y: 320,
    ease: "none",
    scrollTrigger: {
        trigger: ".overall-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});