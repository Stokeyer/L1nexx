import React from "react";
import cl from "./styles.module.scss";
import type { StackProps } from "./types";
import { motion } from "framer-motion";


const defaultStackData: StackProps = {
  stack: {
    header: "Технологический стек",
    cover: "Основные технологии, с которыми я работаю",
    react: "React",
    typescript: "TypeScript",
    javascript: "JavaScript",
    html5: "HTML5",
    css3: "CSS3",
    scss: "SCSS",
    more: "Подробнее о навыках"
  },
};

// Варианты анимаций для Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

const techCardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

const buttonVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    
};

export const Stack: React.FC<StackProps> = (props = defaultStackData) => {
  const stackData = { ...defaultStackData, ...props };
  const stackInfo = stackData.stack || defaultStackData.stack;

  return (
    <motion.div 
      className={cl.stack}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={headerVariants}>{stackInfo?.header}</motion.h2>
      <motion.p 
        variants={headerVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {stackInfo?.cover}
      </motion.p>
      <motion.div 
        className={cl.stack__container}
        variants={containerVariants}
      >
        <motion.a 
          href="https://react.dev/"
          variants={techCardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <section className={cl.stack__react}>
            <motion.h3
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
            >
              R
            </motion.h3>
            <p>{stackInfo?.react}</p>
          </section>
        </motion.a>
        <motion.a 
          href="https://www.typescriptlang.org/"
          variants={techCardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <section className={cl.stack__typescript}>
            <motion.h3
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
            >
              T
            </motion.h3>
            <p>{stackInfo?.typescript}</p>
          </section>
        </motion.a>
        <motion.a 
          href="https://javascript.info/"
          variants={techCardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <section className={cl.stack__javascript}>
            <motion.h3
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "backOut" }}
            >
              J
            </motion.h3>
            <p>{stackInfo?.javascript}</p>
          </section>
        </motion.a>
        <motion.a 
          href="https://html.spec.whatwg.org/multipage/"
          variants={techCardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <section className={cl.stack__html}>
            <motion.h3
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
            >
              H
            </motion.h3>
            <p>{stackInfo?.html5}</p>
          </section>
        </motion.a>
        <motion.a 
          href="https://devdocs.io/css/"
          variants={techCardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <section className={cl.stack__css}>
            <motion.h3
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "backOut" }}
            >
              C
            </motion.h3>
            <p>{stackInfo?.css3}</p>
          </section>
        </motion.a>
        <motion.a 
          href="https://sass-lang.com/"
          variants={techCardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <section className={cl.stack__scss}>
            <motion.h3
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: "backOut" }}
            >
              S
            </motion.h3>
            <p>{stackInfo?.scss}</p>
          </section>
        </motion.a>
      </motion.div>
      <motion.button 
        onClick={() => handleNavigation('/skills')} 
        className={cl.stack__button}
        variants={buttonVariants}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Подробнее о навыках 
        <motion.svg 
          className={cl.stack__button_svg} 
          fill="none" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M9 5l7 7-7 7"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </motion.div>
  );
};
