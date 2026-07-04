"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProfileCard() {

  const [flip, setFlip] = useState(false);

  return (

    <motion.div

      whileHover={{ scale: 1.02 }}

      className="relative h-[500px] w-[360px] cursor-pointer"

      style={{ perspective: "1400px" }}

      onClick={() => setFlip(!flip)}

    >

      <motion.div

        animate={{

          rotateY: flip ? 180 : 0,

        }}

        transition={{ duration: 0.8 }}

        className="relative h-full w-full rounded-[40px]"

        style={{ transformStyle: "preserve-3d" }}

      >

        {/* FRONT */}

        <div

          className="absolute inset-0 overflow-hidden rounded-[40px] border border-[#C8A96A]"

          style={{ backfaceVisibility: "hidden" }}

        >

          <Image

            src="/images/profile1.png"

            fill

            alt="Profile"

            className="object-cover"

          />

        </div>

        {/* BACK */}

        <div

          className="absolute inset-0 overflow-hidden rounded-[40px] border border-[#C8A96A]"

          style={{

            transform: "rotateY(180deg)",

            backfaceVisibility: "hidden",

          }}

        >

          <Image

            src="/images/profile2.png"

            fill

            alt="Profile"

            className="object-cover"

          />

        </div>

      </motion.div>

    </motion.div>

  );

}