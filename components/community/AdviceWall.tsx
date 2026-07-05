"use client";

import { useEffect, useState } from "react";
import { getAdvice } from "@/lib/firestore";
import { motion } from "framer-motion";

interface Advice {

  id:string;

  name:string;

  profession:string;

  message:string;

}

export default function AdviceWall(){

const [letters,setLetters]=useState<Advice[]>([]);

useEffect(()=>{

loadLetters();

},[]);

async function loadLetters(){

const data=await getAdvice();

setLetters(data as Advice[]);

}

return(

<section className="mx-auto max-w-6xl px-8 py-32">

<p className="uppercase tracking-[0.35em] text-[#C8A96A]">

Letters to Xen

</p>

<h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">

Words Left Behind

</h2>

<div className="mt-16 grid gap-8 md:grid-cols-2">

{letters.map((letter,index)=>(

<motion.div

key={letter.id}

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*0.08}}

viewport={{once:true}}

className="rounded-[28px]
border
border-[#C8A96A]/20
bg-white/5
backdrop-blur-xl
p-8"

>

<p className="text-2xl leading-10 italic">

❝

{letter.message}

❞

</p>

<div className="mt-10">

<h3 className="text-xl font-semibold">

{letter.name}

</h3>

<p className="text-[#C8A96A]">

{letter.profession}

</p>

</div>

</motion.div>

))}

</div>

</section>

)

}