import { motion } from "motion/react";
import logo from "figma:asset/a193dcea5c017d729537e1e9c23d30dbccfd591e.png";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={logo}
            alt="QUANTUM CERT Logo"
            className="w-24 h-24"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary tracking-wider"
        >
          QUANTUM CERT
        </motion.div>
      </div>
    </div>
  );
}
