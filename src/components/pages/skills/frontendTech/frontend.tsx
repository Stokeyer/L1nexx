import cl from "./styles.module.scss";
import type { FrontendProps } from "./types";
import { motion } from "framer-motion";

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
    hidden: { y: -30, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "backOut" as const
        }
    }
};

const skillItemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    },
    hover: {
        y: -5,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const
        }
    }
};

const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1.2,
            ease: "easeOut" as const,
            delay: 0.5
        }
    }
};

const defaultTechnologiesData: FrontendProps = {
    Frontend: {
        heading: "Frontend Technologies",
        html5: "HTML5",
        html5Percent: "90%",
        css3: "CSS3",
        css3Percent: "85%",
        sass: "SCSS/Sass",
        sassPercent: "80%",
        javaScript: "JavaScript",
        javaScriptPercent: "75%",
        typeScript: "TypeScript",
        typeScriptPercent: "65%",
        react: "React",
        reactPercent: "75%"
    },
    FrontendInfo: {
        html5Info: "Семантическая разметка, доступность",
        css3Info: "Flexbox, Grid, анимации, адаптивность",
        sassInfo: "Препроцессоры, миксины, переменные",
        javaScriptInfo: "ES6+, асинхронность, DOM API",
        typeScriptInfo: "Типизация, интерфейсы, дженерики",
        reactInfo: "Хуки, компоненты, состояние",
    },
};

export const FrontendTech: React.FC<FrontendProps> = (props = defaultTechnologiesData ) => {
    const FrontendData = { ...defaultTechnologiesData, ...props };
    const Frontend = FrontendData.Frontend || defaultTechnologiesData.Frontend;
    const FrontendInfo = FrontendData.FrontendInfo || defaultTechnologiesData.FrontendInfo;

    return (
        <>
            <motion.div 
                className={cl.frontend}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={cl.frontend__container}>
                    <motion.h2 
                        variants={headerVariants}
                    >
                        {Frontend?.heading}
                    </motion.h2>
                    <motion.section 
                        className={cl.frontend__section}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={skillItemVariants}
                            whileHover="hover"
                        >
                            <motion.nav
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h3
                                    whileHover={{ color: "#e34f26" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.html5}
                                </motion.h3>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.html5Percent}
                                </motion.p>
                            </motion.nav>
                            <section className={cl.Progress__line_gray}>
                                <motion.section 
                                    className={cl.Progress__line_html}
                                    variants={progressVariants}
                                    style={{ transformOrigin: "left" }}
                                />
                            </section>
                            <motion.p
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {FrontendInfo?.html5Info}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={skillItemVariants}
                            whileHover="hover"
                        >
                            <motion.nav
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h3
                                    whileHover={{ color: "#1572b6" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.css3}
                                </motion.h3>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.css3Percent}
                                </motion.p>
                            </motion.nav>
                            <section className={cl.Progress__line_gray}>
                                <motion.section 
                                    className={cl.Progress__line_css}
                                    variants={progressVariants}
                                    style={{ transformOrigin: "left" }}
                                />
                            </section>
                            <motion.p
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {FrontendInfo?.css3Info}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={skillItemVariants}
                            whileHover="hover"
                        >
                            <motion.nav
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h3
                                    whileHover={{ color: "#cf649a" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.sass}
                                </motion.h3>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.sassPercent}
                                </motion.p>
                            </motion.nav>
                            <section className={cl.Progress__line_gray}>
                                <motion.section 
                                    className={cl.Progress__line_sass}
                                    variants={progressVariants}
                                    style={{ transformOrigin: "left" }}
                                />
                            </section>
                            <motion.p
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {FrontendInfo?.sassInfo}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={skillItemVariants}
                            whileHover="hover"
                        >
                            <motion.nav
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h3
                                    whileHover={{ color: "#f7df1e" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.javaScript}
                                </motion.h3>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.javaScriptPercent}
                                </motion.p>
                            </motion.nav>
                            <section className={cl.Progress__line_gray}>
                                <motion.section 
                                    className={cl.Progress__line_javaScript}
                                    variants={progressVariants}
                                    style={{ transformOrigin: "left" }}
                                />
                            </section>
                            <motion.p
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {FrontendInfo?.javaScriptInfo}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={skillItemVariants}
                            whileHover="hover"
                        >
                            <motion.nav
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h3
                                    whileHover={{ color: "#3178c6" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.typeScript}
                                </motion.h3>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.typeScriptPercent}
                                </motion.p>
                            </motion.nav>
                            <section className={cl.Progress__line_gray}>
                                <motion.section 
                                    className={cl.Progress__line_typeScript}
                                    variants={progressVariants}
                                    style={{ transformOrigin: "left" }}
                                />
                            </section>
                            <motion.p
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {FrontendInfo?.typeScriptInfo}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={skillItemVariants}
                            whileHover="hover"
                        >
                            <motion.nav
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h3
                                    whileHover={{ color: "#61dafb" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.react}
                                </motion.h3>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {Frontend?.reactPercent}
                                </motion.p>
                            </motion.nav>
                            <section className={cl.Progress__line_gray}>
                                <motion.section 
                                    className={cl.Progress__line_react}
                                    variants={progressVariants}
                                    style={{ transformOrigin: "left" }}
                                />
                            </section>
                            <motion.p
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {FrontendInfo?.reactInfo}
                            </motion.p>
                        </motion.div>
                    </motion.section>
                </div>
            </motion.div>
        </>
    );
};
