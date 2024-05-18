import ActiveSectionContextProvider from "./context/active-section-context";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme-context";
import { Toaster } from "react-hot-toast";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Intro from "./components/intro";
import Projects from "./components/projects";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";
import Header from "./components/header";

export default function Home() {
  return (
    <div
      className={`z-10 bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />

          <Toaster position="top-right" />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
