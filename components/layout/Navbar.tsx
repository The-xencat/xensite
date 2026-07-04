"use client";

import { motion } from "framer-motion";

export default function Navbar(){

return(

<motion.header

initial={{y:-80,opacity:0}}

animate={{y:0,opacity:1}}

transition={{duration:1}}

className="fixed top-0 left-0 z-50 w-full"

>

<div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-7">

<div>

<h1 className="text-2xl tracking-[0.4em] text-[#C8A96A]">

XEN

</h1>

</div>

<nav className="hidden gap-10 uppercase tracking-[0.25em] md:flex">

<a href="#about">About</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>

<a href="#resume">Resume</a>

</nav>

</div>

</motion.header>

)

}