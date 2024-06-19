"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <main className="flex min-h-screen flex-col gap-24 items-center justify-center p-24">
      <button
        className="rounded-lg px-4 py-2 text-sm bg-gray-950 text-white duration-150 font-medium transition-colors hover:bg-gray-900"
        onClick={() => setShouldAnimate((s) => !s)}
      >
        Animate
      </button>
      <motion.div
        animate={{ scale: shouldAnimate ? 1.5 : 1, y: shouldAnimate ? -40 : 0 }}
        className="bg-yellow-300 w-20 h-20 rounded-full"
      />
    </main>
  );
}
