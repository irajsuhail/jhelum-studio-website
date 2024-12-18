"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="grid grid-rows-[100px_1fr_60px] min-h-screen max-w-5xl mx-auto">
      <motion.header
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      >
        <Image src="/jhelum-studio.svg" alt="Logo" width={100} height={40} />
      </motion.header>
      <main className="flex flex-col items-center justify-center relative">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-center">
            <span className="text-gray-500">From vision to reality,</span>{" "}
            <br /> shaping experiences that inspire.
          </h1>
          <a
            href="https://book.jhelum.studio"
            target="_blank"
            className="block font-semibold mt-6 px-8 py-3 bg-gradient-to-r from-black to-gray-700 text-white rounded-full shadow-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            Book a call
          </a>
        </motion.div>
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          width="327"
          height="327"
          viewBox="0 0 327 327"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            opacity="0.34"
            d="M301.635 161.615L320.825 134.022C333.004 116.51 324.695 92.1936 304.352 85.823L272.302 75.7863C262.6 72.7479 255.042 65.0758 252.142 55.3196L242.561 23.0938C236.48 2.64035 212.311 -6.01616 194.653 5.93675L166.833 24.7682C158.411 30.4691 147.708 31.6016 138.282 27.7895L107.145 15.1969C87.3814 7.20388 65.5539 20.728 63.8777 42.0019L61.2367 75.521C60.4372 85.6688 54.6482 94.7533 45.7944 99.7554L16.5479 116.279C-2.01515 126.766 -5.06478 152.284 10.5022 166.86L35.029 189.827C42.4542 196.779 45.9387 206.975 44.3242 217.025L38.9914 250.222C35.6068 271.291 53.6305 289.59 74.72 286.492L107.945 281.611C118.004 280.134 128.137 283.763 134.978 291.293L157.574 316.165C171.917 331.952 197.444 329.25 208.173 310.811L225.078 281.758C230.195 272.963 239.348 267.293 249.492 266.633L283.002 264.452C304.272 263.067 318.077 241.4 310.369 221.505L298.223 190.158C294.546 180.668 295.825 169.968 301.635 161.615Z"
            stroke="#D3D3D3"
            strokeDasharray="1200"
            strokeDashoffset="0"
            initial={{ strokeDashoffset: 1200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </main>
      <motion.footer
        className="flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      >
        <div className="text-xs md:text-sm flex items-center justify-center gap-4">
          <p className="font-semibold">Coming soon</p>
          <div className="relative w-28 h-2">
            <div className="absolute inset-0 bg-gray-200 h-2 w-28 rounded-full"></div>
            <div className="absolute inset-0 bg-black h-2 w-11 rounded-full"></div>
          </div>
          <p className=" text-gray-500">Releasing in 2025</p>
        </div>
      </motion.footer>
    </div>
  );
}
