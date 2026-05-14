import { motion } from "framer-motion";

export default function LoadingScreen() {

  return (

    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999] overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}

        <motion.div

          initial={{
            scale: 0.7,
            opacity: 0
          }}

          animate={{
            scale: 1,
            opacity: 1
          }}

          transition={{
            duration: 0.8
          }}

          className="w-36 h-36 rounded-[40px] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl"

        >

          <h1 className="text-5xl font-black text-white">
            HR
          </h1>

        </motion.div>

        {/* TITLE */}

        <motion.h1

          initial={{
            y: 30,
            opacity: 0
          }}

          animate={{
            y: 0,
            opacity: 1
          }}

          transition={{
            delay: 0.3,
            duration: 0.8
          }}

          className="mt-10 text-6xl font-black text-white"

        >

          PulseHR AI

        </motion.h1>

        {/* SUB */}

        <motion.p

          initial={{
            y: 20,
            opacity: 0
          }}

          animate={{
            y: 0,
            opacity: 1
          }}

          transition={{
            delay: 0.5,
            duration: 0.8
          }}

          className="mt-5 text-gray-400 text-2xl"

        >

          Enterprise Workforce Intelligence

        </motion.p>

        {/* LOADER */}

        <motion.div

          initial={{
            width: 0
          }}

          animate={{
            width: 260
          }}

          transition={{
            delay: 0.8,
            duration: 1.5
          }}

          className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-12"

        />

      </div>

    </div>
  );
}