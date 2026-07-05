"use client";

import { useState } from "react";
import { addReview } from "@/lib/firestore";

export default function ReviewForm() {

const [name,setName]=useState("");

const [role,setRole]=useState("");

const [company,setCompany]=useState("");

const [rating,setRating]=useState(5);

const [review,setReview]=useState("");

const [loading,setLoading]=useState(false);

const [success,setSuccess]=useState(false);

async function submit(e:React.FormEvent){

e.preventDefault();

setLoading(true);

await addReview(

name,

role,

company,

rating,

review

);

setSuccess(true);

setLoading(false);

setName("");

setRole("");

setCompany("");

setReview("");

setRating(5);

}

return(

<section className="mx-auto max-w-5xl px-8 py-24">

<p className="uppercase tracking-[0.35em] text-[#C8A96A]">

Professional Review

</p>

<h2 className="mt-4 text-5xl font-[var(--font-cormorant)]">

Worked with Xen?

</h2>

<form
onSubmit={submit}
className="mt-12 space-y-5">

<input
className="w-full rounded-xl border border-[#C8A96A]/20 bg-transparent p-4"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="w-full rounded-xl border border-[#C8A96A]/20 bg-transparent p-4"
placeholder="Your Role"
value={role}
onChange={(e)=>setRole(e.target.value)}
/>

<input
className="w-full rounded-xl border border-[#C8A96A]/20 bg-transparent p-4"
placeholder="Company (optional)"
value={company}
onChange={(e)=>setCompany(e.target.value)}
/>

<select

value={rating}

onChange={(e)=>setRating(Number(e.target.value))}

className="w-full rounded-xl border border-[#C8A96A]/20 bg-[#08111D] p-4"

>

<option value={5}>★★★★★</option>

<option value={4}>★★★★☆</option>

<option value={3}>★★★☆☆</option>

<option value={2}>★★☆☆☆</option>

<option value={1}>★☆☆☆☆</option>

</select>

<textarea

rows={6}

className="w-full rounded-xl border border-[#C8A96A]/20 bg-transparent p-4"

placeholder="Write your review..."

value={review}

onChange={(e)=>setReview(e.target.value)}

/>

<button

className="rounded-full bg-[#C8A96A] px-8 py-4 text-black font-semibold"

>

{loading?"Sending...":"Submit Review"}

</button>

{success && (

<p className="text-green-400">

Review submitted successfully.

</p>

)}

</form>

</section>

)

}