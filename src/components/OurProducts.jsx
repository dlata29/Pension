import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the whole section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000", // length of scroll
        pin: true,
        scrub: true,
      });

      // Animate text sections
      textRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${i * 600} top`,
              end: () => `top+=${(i + 1) * 600} top`,
              toggleActions: "play reverse play reverse",
              scrub: true,
            },
          }
        );
      });

      // Animate images slightly *after* text
      imageRefs.current.forEach((img, i) => {
        gsap.fromTo(
          img,
          { autoAlpha: 0, yPercent: 30 },
          {
            autoAlpha: 1,
            yPercent: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${i * 600 + 200} top`, // starts after text
              end: () => `top+=${(i + 1) * 600} top`,
              toggleActions: "play reverse play reverse",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section flex h-screen w-full">
      {/* Left text */}
      <div className="w-1/2 flex flex-col justify-center pl-16 space-y-32">
        {["Section A", "Section B", "Section C"].map((title, i) => (
          <div key={i} ref={(el) => (textRefs.current[i] = el)} className="opacity-0">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Bullet point 1 for {title}</li>
              <li>Bullet point 2 for {title}</li>
              <li>Bullet point 3 for {title}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Right images */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
        {["/imgA.jpg", "/imgB.jpg", "/imgC.jpg"].map((src, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={src}
            alt={`Image ${i}`}
            className="absolute w-3/4 h-auto object-cover opacity-0 rounded-2xl shadow-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
