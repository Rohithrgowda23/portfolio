import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 22;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl tracking-tight mb-6"
          >
            RRG<span className="text-accent">.</span>
          </motion.div>
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
