import Hero from "./sections/hero";
import NavBar from "./sections/navbar";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/services";
import { ReactLenis } from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import { Toaster } from "react-hot-toast";
import Contact from "./sections/Contact";

function App() {
  return (
    <ReactLenis
      root
      className="relative min-h-screen overflow-x-hidden bg-primary text-black"
    >
      <NavBar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: "999px",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            padding: "12px 16px",
          },
        }}
      />
    </ReactLenis>
  );
}

export default App;
