import { Link } from "react-scroll";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import HeroScene from "../components/HeroScene.jsx";

const Hero = () => {
  const text = `I help founders and product teams turn ambitious ideas
into polished web experiences that feel fast,
clear, and built for real growth.`;

  return (
    <section
      id="Home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <AnimatedHeaderSection
        subTitle={"404 No Bugs Found"}
        title={"Aman Kumar"}
        text={text}
        textColor={"text-black"}
      />
      <div className="px-10 pb-10 md:pb-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25rem] text-black/70 md:text-sm">
            <span className="rounded-full border border-black/15 bg-white/55 px-4 py-2 backdrop-blur-sm">
              React / Next.js
            </span>
            <span className="rounded-full border border-black/15 bg-white/55 px-4 py-2 backdrop-blur-sm">
              Performance-first UI
            </span>
            <span className="rounded-full border border-black/15 bg-white/55 px-4 py-2 backdrop-blur-sm">
              Available for freelance
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="Work"
              smooth
              duration={900}
              className="cursor-pointer rounded-full bg-black px-6 py-3 text-sm uppercase tracking-[0.25rem] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View selected work
            </Link>
            <a
              href="mailto:Amankr97111@gmail.com"
              className="rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm uppercase tracking-[0.25rem] text-black backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_40%),radial-gradient(circle_at_20%_70%,_rgba(207,163,85,0.22),_transparent_30%)]" />
        <HeroScene />
      </figure>
    </section>
  );
};

export default Hero;
