import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import HeartScene from "../components/HeartScene";
import LoveTimer from "./LoveTimer";
import LoveBook from "../components/LoveBook";

export default function YesPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const emojiRef = useRef<HTMLSpanElement>(null);

  const titleText = "My Dearest Abida";

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const emoji = emojiRef.current;

    if (!title) return;

    const titleAnim = animate(title.querySelectorAll("span"), {
      opacity: [0, 1],
      translateY: [30, 0],
      rotateX: [30, 0],
      delay: stagger(75),
      ease: "outExpo",
      duration: 1000,
    });

    const subtitleAnim = subtitle
      ? animate(subtitle, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: 1200,
          duration: 1000,
          ease: "outExpo",
        })
      : undefined;

    const emojiAnim = emoji
      ? animate(emoji, {
          opacity: [0, 1],
          scale: [0.3, 1],
          rotate: [-20, 0],
          delay: 1700,
          duration: 1200,
          ease: "outElastic(1, .6)",
        })
      : undefined;

    return () => {
      titleAnim.pause();
      subtitleAnim?.pause();
      emojiAnim?.pause();
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at top, #482044 0%, #190d2c 55%, #090715 100%)",
      }}
    >
      <HeartScene />

      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(8,2,15,.55) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem 1.25rem 6rem",
          gap: "2.5rem",
          width: "100%",
        }}
      >
        <header
          style={{
            width: "100%",
            maxWidth: "760px",
            textAlign: "center",
            paddingTop: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.28em",
              color: "#ffb4d9",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            ✦ A beautiful new beginning ✦
          </p>

          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.1rem, 8vw, 4.8rem)",
              lineHeight: 1.2,
              margin: "0 0 1.25rem",
              color: "#fff5fb",
              textShadow: "0 0 35px rgba(255,105,180,.35)",
            }}
          >
            {titleText.split("").map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: 0,
                  color: i >= 11 ? "#ff9bce" : "#fff5fb",
                  whiteSpace: ch === " " ? "pre" : "normal",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>

          <span
            ref={emojiRef}
            style={{
              display: "inline-block",
              fontSize: "clamp(3rem, 9vw, 5rem)",
              opacity: 0,
              filter: "drop-shadow(0 0 18px rgba(255,80,160,.6))",
            }}
          >
            💝
          </span>

          <p
            ref={subtitleRef}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.2rem, 3vw, 1.65rem)",
              color: "#f7c7e3",
              fontStyle: "italic",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "1.2rem auto 0",
              opacity: 0,
            }}
          >
            Abida, thank you for giving this little story a chance.
            <br />
            Let's fill it with kindness, laughter and beautiful memories. ♥
          </p>

          <div
            style={{
              width: "90px",
              height: "1px",
              margin: "2rem auto 0",
              background:
                "linear-gradient(90deg, transparent, #ff9bce, transparent)",
            }}
          />
        </header>

        <section
          style={{
            width: "100%",
            maxWidth: "650px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#ffb4d9",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.5rem",
              marginBottom: "1.2rem",
            }}
          >
            A little reminder of us 💗
          </p>

          <LoveTimer />
        </section>

        <section
          style={{
            width: "100%",
            maxWidth: "760px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h2
              style={{
                color: "#ffd2e8",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              }}
            >
              A Little Book of Feelings 📖
            </h2>

            <p
              style={{
                color: "#e7c6e2",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.15rem",
                fontStyle: "italic",
              }}
            >
              Little words, heartfelt moments, just for you.
            </p>
          </div>

          <LoveBook />
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "#d4b4d0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1rem",
            fontStyle: "italic",
            lineHeight: 1.8,
            paddingTop: "1rem",
          }}
        >
          <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            🌹 💗 🌹
          </div>
          Made with love and a little courage, for Abida.
        </footer>
      </main>
    </div>
  );
}