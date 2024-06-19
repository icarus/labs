"use client"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        animate={{ x: 100 }}
        className="bg-gray-700 w-20 h-20 rounded-full"
      />
    </main>
  );
}
