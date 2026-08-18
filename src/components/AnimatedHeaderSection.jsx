import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTextLines from "./animatedTextLines.jsx";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const textBlockRef = useRef(null);
  const shouldSplitTitle = title?.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  useGSAP(() => {
    const timelineConfig = withScrollTrigger
      ? {
          scrollTrigger: {
            trigger: contextRef.current,
            start: "top 85%",
          },
        }
      : {};

    const tl = gsap.timeline(timelineConfig);

    tl.from(headerRef.current, {
      autoAlpha: 0,
      y: withScrollTrigger ? 80 : 36,
      duration: withScrollTrigger ? 0.9 : 0.65,
      ease: "power2.out",
      force3D: true,
    }).from(
      textBlockRef.current,
      {
        autoAlpha: 0,
        y: withScrollTrigger ? 40 : 20,
        duration: withScrollTrigger ? 0.75 : 0.5,
        ease: "power2.out",
        force3D: true,
      },
      withScrollTrigger ? "<+0.1" : "<+0.05"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 will-change-transform sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col gap-12 mb-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}
            >
              {titleParts?.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div ref={textBlockRef} className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end ">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor} `}
            animated={withScrollTrigger}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
