import React, { useState, useEffect, useRef } from "react";
import "../css/Hero.css";

export default function Hero({ onVideoEnd }) {
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2000);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 2;
      videoElement.addEventListener("ended", onVideoEnd);
    }

    return () => {
      clearTimeout(textTimer);
      if (videoElement) {
        videoElement.removeEventListener("ended", onVideoEnd);
      }
    };
  }, [onVideoEnd]);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video ref={videoRef} className="hero-video" src="/videos/HarpSharp.mp4" autoPlay muted />

      {/* Overlay (contains navbar + text) */}
      <div className="hero-overlay left-align">
        {/* Hero Text with fade-in */}
        <div className={`hero-content ${showText ? "visible" : "hidden"}`}>
          <span>
            Harp <span className="gradient-text">&</span> Code
          </span>
          <p>
            <i>Transforming Ideas into Intelligent Tools</i>
          </p>
        </div>
      </div>
    </section>
  );
}
