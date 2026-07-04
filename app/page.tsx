// ------------------------ Ça Va Aller ------------------------------------

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-7xl md:text-9xl font-serif text-white tracking-wide">
//           ça va aller
//         </h1>

//         <p className="mt-6 text-gray-400 italic">
//           — Xen
//         </p>
//       </div>
//     </main>
//   );
// }


// --------------------- For PROTOTYPE ONLY ---------------------------------------------------
// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/prototype.html");
// }


// -------------------------ACTUAL ONE -----------------------------------------------
// import Hero from "@/components/hero/Hero";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//     </main>
//   );
// }

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import AcademicTimeline from "@/components/academics/AcademicTimeline";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Languages from "@/components/skills/Languages";
import Certifications from "@/components/certifications/Certifications";
import Quote from "@/components/quotes/Quote";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AcademicTimeline />
      <Projects />
      <Skills />
      <Languages />
      <Certifications />
      <Quote />
      <Contact />
    </>
  );
}