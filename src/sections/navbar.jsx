import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const navItems = ["Home", "Services", "About", "Work", "Contact"];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        tl.current?.reverse();
        iconTl.current?.reverse();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => {
    tl.current?.reverse();
    iconTl.current?.reverse();
    setIsOpen(false);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      tl.current?.play();
      iconTl.current?.play();
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        aria-hidden={!isOpen}
        className={`fixed z-50 flex h-full w-full flex-col justify-start gap-y-10 overflow-y-auto bg-black px-10 py-20 uppercase text-white/80 transition-opacity duration-300 md:left-1/2 md:w-1/2 md:justify-between md:py-28 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-y-2 text-[clamp(3.2rem,15vw,5.5rem)] leading-[0.9] md:text-6xl lg:text-8xl">
          {navItems.map((section, index) => (
            <div key={section} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 cursor-pointer hover:text-white"
                to={section}
                smooth
                offset={0}
                duration={900}
                onClick={closeMenu}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className="mt-6 flex flex-col flex-wrap justify-between gap-8 pb-6 md:mt-0 md:flex-row md:pb-0"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <a
              href="mailto:Amankr97111@gmail.com"
              className="block max-w-full break-all text-lg leading-relaxed tracking-[0.2em] lowercase transition-colors duration-300 hover:text-white md:text-xl"
            >
              Amankr97111@gmail.com
            </a>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="fixed top-4 right-10 z-50 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-full bg-black transition-all duration-300 md:h-20 md:w-20"
        onClick={toggleMenu}
        style={
          showBurger || isOpen
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </button>
    </>
  );
};

export default Navbar;
