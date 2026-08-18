import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import AnimatedTextLines from "../components/animatedTextLines.jsx";



const About = () => {


const text = `I build thoughtful, scalable web experiences that turn complex ideas into simple, meaningful products.`;

const aboutText = `I’m Aman Kumar, a Frontend Developer focused on building fast, accessible, and reliable digital experiences.

I work primarily with React, Next.js, and TypeScript, transforming ideas and designs into polished products that are easy to use and built to scale. I care about performance, clean architecture, thoughtful interactions, and the details that make an interface feel effortless.

My approach is simple: understand the problem, build with purpose, and continuously improve the experience for both users and businesses.

When I’m not coding, I enjoy exploring new places, discovering music, experimenting with new tools, and connecting with people who are passionate about building meaningful things.`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="About" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/ak.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
