import cl from './styles.module.scss'
import type { RoadMapProps } from './types'
import { motion } from 'framer-motion'


// Варианты анимаций для Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.3
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

const roadmapItemVariants = {
    hidden: { 
        x: -50, 
        opacity: 0, 
        scale: 0.9,
        rotateY: -15
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    },
    hover: {
        x: 10,
        scale: 1.02,
        rotateY: 5,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const
        }
    }
};

const lastItemVariants = {
    hidden: { 
        x: -50, 
        opacity: 0, 
        scale: 0.9,
        rotateY: -15
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    },
    hover: {
        x: 10,
        scale: 1.02,
        rotateY: 5,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const
        }
    }
};

const defaultRoadMapData: RoadMapProps = {
    RoadMap: {
        heading: "Мой путь обучения"
    },
    RoadMapLearning: {
        heading: "Изучение основ",
        language: "HTML, CSS, JavaScript",
        information: "Освоил основы веб-разработки, изучил семантику HTML, стилизацию CSS и основы JavaScript"
    },
    RoadMapJavaScript: {
        heading: "Углубление в JavaScript",
        language: "ES6+, асинхронность, DOM",
        information: "Изучил современный JavaScript, работу с API, манипуляции с DOM"
    },
    RoadMapTypeScript: {
        heading: "React и TypeScript",
        language: "Компонентная архитектура, типизация",
        information: "Освоил React, хуки, управление состоянием, начал изучать TypeScript"
    },
    RoadMapPortfolio: {
        heading: "Практические проекты",
        portfolio: "Портфолио, веб-приложения",
        information: "Создаю проекты для закрепления знаний и демонстрации навыков"
    },
}


export const RoadMap: React.FC<RoadMapProps> = (props = defaultRoadMapData) => {
    const RoadMapData = { ...defaultRoadMapData, ...props };
    const RoadMap = RoadMapData.RoadMap || defaultRoadMapData.RoadMap;
    const RoadMapLearning = RoadMapData.RoadMapLearning || defaultRoadMapData.RoadMapLearning;
    const RoadMapJavaScript = RoadMapData.RoadMapJavaScript || defaultRoadMapData.RoadMapJavaScript
    const RoadMapTypeScript = RoadMapData.RoadMapTypeScript || defaultRoadMapData.RoadMapTypeScript
    const RoadMapPortfolio = RoadMapData.RoadMapPortfolio || defaultRoadMapData.RoadMapPortfolio

    return (
        <>
            <motion.div 
                className={cl.RoadMap}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={cl.RoadMap__container}>
                    <motion.h3 
                        variants={headerVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        {RoadMap?.heading}
                    </motion.h3>
                    <motion.div 
                        className={cl.RoadMap__list}
                        variants={containerVariants}
                    >
                        <motion.div 
                            className={cl.RoadMap__item}
                            variants={roadmapItemVariants}
                            whileHover="hover"
                        >
                            <motion.section
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h4
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    whileHover={{ color: "#3b82f6" }}
                                >
                                    {RoadMapLearning?.heading}
                                </motion.h4>
                                <motion.h5
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {RoadMapLearning?.language}
                                </motion.h5>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    whileHover={{ opacity: 0.8 }}
                                >
                                    {RoadMapLearning?.information}
                                </motion.p>
                            </motion.section>
                        </motion.div>
                        <motion.div 
                            className={cl.RoadMap__item}
                            variants={roadmapItemVariants}
                            whileHover="hover"
                        >
                            <motion.section
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h4
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                    whileHover={{ color: "#f59e0b" }}
                                >
                                    {RoadMapJavaScript?.heading}
                                </motion.h4>
                                <motion.h5
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {RoadMapJavaScript?.language}
                                </motion.h5>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.5 }}
                                    whileHover={{ opacity: 0.8 }}
                                >
                                    {RoadMapJavaScript?.information}
                                </motion.p>
                            </motion.section>
                        </motion.div>
                        <motion.div 
                            className={cl.RoadMap__item}
                            variants={roadmapItemVariants}
                            whileHover="hover"
                        >
                            <motion.section
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h4
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    whileHover={{ color: "#3178c6" }}
                                >
                                    {RoadMapTypeScript?.heading}
                                </motion.h4>
                                <motion.h5
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {RoadMapTypeScript?.language}
                                </motion.h5>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3, duration: 0.5 }}
                                    whileHover={{ opacity: 0.8 }}
                                >
                                    {RoadMapTypeScript?.information}
                                </motion.p>
                            </motion.section>
                        </motion.div>
                        <motion.div 
                            className={cl.RoadMap__item_purple || cl.RoadMap__item}
                            variants={lastItemVariants}
                            whileHover="hover"
                        >
                            <motion.section
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.h4
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.5 }}
                                    whileHover={{ color: "#8b5cf6" }}
                                >
                                    {RoadMapPortfolio?.heading}
                                </motion.h4>
                                <motion.h5
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {RoadMapPortfolio?.portfolio}
                                </motion.h5>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    whileHover={{ opacity: 0.8 }}
                                >
                                    {RoadMapPortfolio?.information}
                                </motion.p>
                            </motion.section>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}