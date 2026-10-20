import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const roseRef = useRef<HTMLSpanElement>(null);

  const titleText = "For My Dearest Ispa";

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const rose = roseRef.current;

    if (!title) return;

    const titleAnim = animate(title.querySelectorAll("span"), {
      opacity: [0, 1],
      translateY: [35, 0],
      rotateX: [45, 0],
      delay: stagger(65),
      ease: "outExpo",
      duration: 1000,
    });

    const roseAnim = rose
      ? animate(rose, {
          opacity: [0, 1],
          scale: [0.3, 1],
          rotate: [-25, 0],
          delay: 1200,
          ease: "outElastic(1, .6)",
          duration: 1400,
        })
      : undefined;

    const subtitleAnim = subtitle
      ? animate(subtitle, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: 1500,
          ease: "outExpo",
          duration: 1100,
        })
      : undefined;

    return () => {
      titleAnim.pause();
      roseAnim?.pause();
      subtitleAnim?.pause();
    };
  }, []);

  return (
    <section
      style={{
        minHeight: "55vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "3rem 1.25rem",
        position: "relative",
        zIndex: 1,
        perspective: "1000px",
      }}
    >
      <div
        style={{
          color: "#f7b8db",
          fontSize: "0.75rem",
          letterSpacing: "4px",
          marginBottom: "1.3rem",
          textTransform: "uppercase",
        }}
      >
        ✦ A Little Surprise For You ✦
      </div>

      <h1
        ref={titleRef}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2.1rem, 8vw, 4.8rem)",
          fontWeight: 600,
          lineHeight: 1.2,
          margin: 0,
          maxWidth: "850px",
          color: "#fff4fb",
          textShadow: "0 0 35px #ff6bb855",
        }}
      >
        {titleText.split("").map((ch, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: 0,
              whiteSpace: ch === " " ? "pre" : "normal",
              color:
                i >= 13
                  ? "#ff9bce"
                  : "#fff4fb",
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>

      <span
        ref={roseRef}
        style={{
          display: "inline-block",
          fontSize: "clamp(2.5rem, 7vw, 4rem)",
          marginTop: "1.1rem",
          opacity: 0,
          filter: "drop-shadow(0 0 16px #ff5ca5)",
        }}
      >
        🌹
      </span>

      <p
        ref={subtitleRef}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.15rem, 3vw, 1.5rem)",
          lineHeight: 1.9,
          color: "#f7d9ed",
          fontStyle: "italic",
          maxWidth: "570px",
          marginTop: "1.5rem",
          opacity: 0,
        }}
      >
        Ispa, there is something special about you.
        <br />
        And today, I want to tell you what my heart has been holding. 💗
      </p>

      <div
        style={{
          width: "75px",
          height: "1px",
          margin: "1.6rem auto",
          background:
            "linear-gradient(90deg, transparent, #ff9bce, transparent)",
        }}
      />

      <p
        style={{
          color: "#e8b8d7",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.05rem",
          fontStyle: "italic",
          margin: 0,
        }}
      >
        Made with courage, just for you ♥
      </p>
    </section>
  );
}