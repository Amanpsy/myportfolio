import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const About = () => {
    const text = `Passionate about crafting robust, scalable web applications that drive business growth from prototype to production.`

const aboutText = `I’m a Frontend Developer who loves transforming complex ideas into seamless digital experiences. 
From crafting blazing-fast React interfaces to optimizing performance for scale, I ensure every pixel and interaction feels intentional.  
My philosophy is simple: clean code, smooth UX, and solutions that empower businesses and users alike.  

Beyond the screen, I’m a social soul who thrives on good conversations, teamwork, and connecting with people who share big ideas.  

When I’m not shipping, you’ll probably find me:  
⚡️ Experimenting with new tools and open-source projects  
🌍 Exploring new places and capturing moments (sometimes through code, sometimes through a lens)  
🎶 Losing track of time with music—or gaining clarity with it.`;

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
        subTitle={"Cod with purpose, Built to scale"}
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
