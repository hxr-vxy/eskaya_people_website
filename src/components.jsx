import { useEffect, useRef, useState } from "react";

/**
 * Fades content in once when it scrolls into view. Skipped for reduced-motion users.
 * Visibility lives in React state (not a hand-added DOM class) so that re-renders which change
 * `className` (e.g. an opened timeline item) can never strip the "in" class and hide the element.
 */
export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} {...rest}>{children}</Tag>;
}

/** A photograph with a fixed aspect ratio and an optional caption. `fit="contain"` for charts and diagrams. */
export function Photo({ img, ratio = "4/3", pos = "center", caption = true, fit = "cover", className = "" }) {
  return (
    <figure className={`photo ${fit === "contain" ? "contain" : ""} ${className}`}>
      <img src={img.src} alt={img.alt} loading="lazy" style={{ aspectRatio: ratio, objectPosition: pos }} />
      {caption && img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
  );
}

/**
 * Compact page opening used by Language and Today.
 * tone: "paper" (light) | "sand" (warm earth tint) | "moss" (dark green, use sparingly)
 */
export function PageHead({ kicker, title, children, img, ratio, pos, tone = "paper", fit }) {
  return (
    <header className={`pagehead tone-${tone}`}>
      <div className="wrap split">
        <div className="split-text">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <div className="lead">{children}</div>
        </div>
        <Photo img={img} ratio={ratio || "4/3"} pos={pos} fit={fit} />
      </div>
    </header>
  );
}

/** Text beside a photograph. `flip` puts the photograph on the left. */
export function Split({ flip = false, img, ratio, pos, fit, children, className = "" }) {
  return (
    <Reveal className={`split ${flip ? "flip" : ""} ${className}`}>
      <div className="split-text">{children}</div>
      <Photo img={img} ratio={ratio || "4/3"} pos={pos} fit={fit} />
    </Reveal>
  );
}

export const Band = ({ tone = "", children, className = "", ...rest }) => (
  <section className={`band ${tone} ${className}`} {...rest}><div className="wrap">{children}</div></section>
);
