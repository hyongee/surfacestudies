import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// プラグインを登録
gsap.registerPlugin(ScrollTrigger);

// 巨大な見出しの出現指定
gsap.fromTo(".heading-en--huge span",
  {
    y: 200,       // 下から
    // opacity: 0   // 透明から
  },
  {
    y: 0,        // 上に戻る
    opacity: 1,  // 完全表示
    stagger: 0.05, // 各文字にディレイをかけて順番に
    duration: 0.6,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
      trigger: ".heading-en--huge", // この要素が
      start: "top 75%",             // 画面のこの位置に来たら開始
      toggleActions: "restart reset restart reverse"
    }
  }
);