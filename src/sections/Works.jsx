import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Selected projects across product interfaces,
real-time dashboards, and business-focused web apps
designed to feel sharp and perform under pressure.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleProjectOpen = (project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
      return;
    }

    toast("This project is confidential / not available online.", {
      icon: "⚠️",
    });
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    if (!projects[index]?.image) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    if (!projects[index]?.image) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="Work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets aesthetics, seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          (() => {
            const hasPreview = Boolean(project.image);

            return (
          <article
            key={project.id}
            id="project"
            className="group relative cursor-pointer py-6"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleProjectOpen(project)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleProjectOpen(project);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className={`absolute inset-0 -z-10 hidden duration-200 clip-path md:block ${
                hasPreview ? "bg-black" : "bg-transparent"
              }`}
            />

            <div
              className={`grid gap-5 px-10 transition-all duration-500 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:group-hover:px-12 ${
                hasPreview ? "md:group-hover:text-white" : ""
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[26px] leading-none lg:text-[32px]">
                    {project.name}
                  </h2>
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="size-5 transition-transform duration-300 group-hover:scale-110 md:size-6"
                  />
                </div>
                <p
                  className={`max-w-2xl text-sm leading-relaxed text-black/70 transition-colors duration-500 md:text-base ${
                    hasPreview ? "md:group-hover:text-white/75" : ""
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.frameworks.map((framework) => (
                  <span
                    key={framework.id}
                    className={`rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.2rem] text-black transition-all duration-500 md:text-xs ${
                      hasPreview
                        ? "md:group-hover:border-white/15 md:group-hover:bg-white/8 md:group-hover:text-white"
                        : ""
                    }`}
                  >
                    {framework.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center md:justify-end">
                <span
                  className={`text-xs uppercase tracking-[0.25rem] text-black/55 transition-colors duration-500 md:text-sm ${
                    hasPreview ? "md:group-hover:text-white/60" : ""
                  }`}
                >
                  {project.link ? "Live project" : "Private case study"}
                </span>
              </div>
            </div>

            <div className="mt-4 h-px w-full bg-black/80" />

            <div
              className={`mt-5 flex items-center justify-between gap-4 px-10 text-sm text-black/60 transition-colors duration-500 md:px-12 ${
                hasPreview ? "md:group-hover:text-white/65" : ""
              }`}
            >
              <p>{project.outcome}</p>
              <p className="hidden uppercase tracking-[0.2rem] md:block">
                {project.year}
              </p>
            </div>

            {project.image && (
              <div className="relative mt-5 flex h-[400px] items-center justify-center px-10 md:hidden">
                <img
                  src={project.bgImage}
                  alt={`${project.name} background preview`}
                  className="h-full w-full rounded-md object-cover brightness-50"
                />
                <img
                  src={project.image}
                  alt={`${project.name} interface preview`}
                  className="absolute rounded-xl px-14"
                />
              </div>
            )}
          </article>
            );
          })()
        ))}

        <div
          ref={previewRef}
          className="fixed left-0 top-1/6 z-50 hidden w-[720px] overflow-hidden rounded-[2rem] border border-black/10 bg-white/90 p-3 opacity-0 shadow-2xl backdrop-blur md:block"
        >
          {currentIndex !== null && projects[currentIndex]?.image && (
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={projects[currentIndex].image}
                alt="project preview"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
