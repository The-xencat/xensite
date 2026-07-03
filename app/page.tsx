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


import { redirect } from "next/navigation";

export default function Home() {
  redirect("/prototype.html");
}