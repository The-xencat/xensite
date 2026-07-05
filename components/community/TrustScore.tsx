"use client";

import { useEffect, useState } from "react";
import { getReviews } from "@/lib/firestore";

export default function TrustScore() {

const [score,setScore]=useState(0);

const [count,setCount]=useState(0);

useEffect(()=>{

load();

},[]);

async function load(){

const reviews:any[]=await getReviews();

setCount(reviews.length);

if(reviews.length===0){

setScore(0);

return;

}

const total=reviews.reduce(

(sum,r)=>sum+r.rating,

0

);

const average=total/reviews.length;

const trust=Math.round((average/5)*100);

setScore(trust);

}

return(

<section className="mx-auto max-w-5xl px-8 py-32">

<div className="rounded-[40px] border border-[#C8A96A]/20 bg-white/5 backdrop-blur-xl p-14 text-center">

<p className="uppercase tracking-[0.4em] text-[#C8A96A]">

Professional Trust

</p>

<h2 className="mt-8 text-8xl font-[var(--font-cormorant)]">

{score}%

</h2>

<p className="mt-6 text-xl text-gray-300">

Based on

<strong>

{" "}{count} Professional Reviews

</strong>

</p>

</div>

</section>

)

}