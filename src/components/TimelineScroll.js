import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineScrollGSAP = () => {
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null); // Wrapper for better scroll handling

  useEffect(() => {
    const timeline = timelineRef.current;
    const container = containerRef.current;
    const scrollSection = scrollSectionRef.current;

    if (!timeline || !container || !scrollSection) return;

    let timelineWidth = timeline.scrollWidth;
    let viewportWidth = container.offsetWidth;

    // Fix disappearing content by adding extra height for smooth transition
    gsap.set(scrollSection, { height: timelineWidth });

    gsap.to(timeline, {
      x: () => -1 * (timelineWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${timelineWidth - viewportWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      {/* Vertical scrolling before the timeline */}
      <section style={{ height: "100vh", background: "lightblue" }}>
        <h1>Scroll Down</h1>
      </section>

      {/* Wrapper to maintain smooth transition */}
      <div ref={scrollSectionRef} style={{ position: "relative" }}>
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            background: "lightcoral",
          }}
        >
          <div
            ref={timelineRef}
            style={{
              display: "flex",
              width: "300vw", // Adjust based on the number of steps
              height: "100%",
            }}
          >
            <div className="panel" style={panelStyle}>
              <h2>Step 1</h2>
            </div>
            <div className="panel" style={panelStyle}>
              <h2>Step 2</h2>
            </div>
            <div className="panel" style={panelStyle}>
              <h2>Step 3</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Resumes Vertical Scroll */}
      <section style={{ height: "100vh", background: "lightgreen" }}>
        <h1>Continue Scrolling</h1>
      </section>
    </div>
  );
};

// Panel styling
const panelStyle = {
  minWidth: "100vw",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
};

export default TimelineScrollGSAP;