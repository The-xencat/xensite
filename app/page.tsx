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
import AdviceForm from "@/components/community/AdviceForm";
import AdviceWall from "@/components/community/AdviceWall";
import ReviewForm from "@/components/community/ReviewForm";
import TrustScore from "@/components/community/TrustScore";
import VisitorCounter from "@/components/community/VisitorCounter";
import ViewResumeButton from "@/components/contact/ViewResumeButton";
import ResumeButton from "@/components/contact/ResumeButton";

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
      <AdviceForm />
      <AdviceWall />
      <ReviewForm />
      <TrustScore />
      <VisitorCounter />
      <ViewResumeButton />
      <ResumeButton />

    </>
  );
}