"use client";

import "./globals.css";
import styles from "./page.module.css";
import Heeder from "./src/components/Heeder";
import Sitbar from "./src/components/Sitbar";
import Intro from "./src/components/Intro";
import { motion, AnimatePresence } from "framer-motion";
// import TransitionD from "./components/TransitionD";

export default function Home() {

  return (
    <>
      <div className={styles.page}>
          <div className={styles.layout}>
            <Sitbar />
            <div className={styles.mainContent}>
              <Heeder />
              <Intro />
            </div>
          </div>
          {/* <div> */}
            
            {/* <AnimatePresence mode="new">
              <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              ></motion.div>
              <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              ></motion.div>
            </AnimatePresence> */}
          {/* </div> */}
      </div>
    </>
  );
}
