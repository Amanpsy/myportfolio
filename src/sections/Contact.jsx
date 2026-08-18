import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import { socials } from "../constants";
import gsap from "gsap";
import Marque from './../components/Marque';



const Contact = () => {
  const text = `Got a product idea, redesign, or frontend challenge?
I’d love to hear what you’re building and where I can help.`;
  const items = [
    "just imagine, how I code",
    "just imagine, how I code",
    "just imagine, how I code",
    "just imagine, how I code",
    "just imagine, how I code",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="Contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="mailto:Amankr97111@gmail.com"
                className="text-xl tracking-wider lowercase transition-colors duration-200 md:text-2xl lg:text-3xl hover:text-white/80"
              >
                Amankr97111@gmail.com
              </a>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="tel:+919711189587"
                className="text-xl lowercase transition-colors duration-200 md:text-2xl lg:text-3xl hover:text-white/80"
              >
                +91 9711189587
              </a>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marque
        items={items}
        className="text-white bg-transparent border-t border-white/10"
      />
    </section>
  );
};

export default Contact;
