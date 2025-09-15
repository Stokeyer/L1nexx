import cl from './styles.module.scss'
import type {designProps} from './types'
import { motion } from 'framer-motion'

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

const defaultDesignData: designProps = {
    design: {
        heading: "Design & UX",
        resDesign: "Responsive Design",
        resDesignPercent: "85%",
        ui: "UI/UX Principles",
        uiPercent: "70%",
        cssFrame: "CSS Frameworks",
        cssFramePercent: "80%",
        figma: "Figma",
        figmaPercent: "65%"
    },
    designInfo: {
        resDesignInfo: "Адаптивная верстка",
        uiInfo: "Пользовательский опыт",
        cssFrameInfo: "ScSS, Tailwind CSS",
        figmaInfo: "Работа с макетами"
    }
}


export const Design: React.FC<designProps> = (props = defaultDesignData ) =>{
    const designData = {...defaultDesignData, ...props}
    const design = designData.design || defaultDesignData.design
    const designInfo = designData.designInfo || defaultDesignData.designInfo

    return(
        <>
            <motion.div 
                className={cl.tools}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={cl.tools__container}>
                    <motion.h2 
                        variants={headerVariants}
                    >
                        {design?.heading}
                    </motion.h2>
                    <motion.section 
                        className={cl.tools__section}
                        variants={containerVariants}
                    >
                        {[
                            { name: design?.resDesign, percent: design?.resDesignPercent, info: designInfo?.resDesignInfo, color: "#4caf50", className: cl.Progress__line_resDesign },
                            { name: design?.cssFrame, percent: design?.cssFramePercent, info: designInfo?.cssFrameInfo, color: "#2196f3", className: cl.Progress__line_cssFrame },
                            { name: design?.ui, percent: design?.uiPercent, info: designInfo?.uiInfo, color: "#ff9800", className: cl.Progress__line_ui },
                            { name: design?.figma, percent: design?.figmaPercent, info: designInfo?.figmaInfo, color: "#f24e1e", className: cl.Progress__line_figma }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={skillItemVariants}
                                whileHover="hover"
                            >
                                <motion.nav
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.h3
                                        whileHover={{ color: item.color }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.name}
                                    </motion.h3>
                                    <motion.p
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.percent}
                                    </motion.p>
                                </motion.nav>
                                <section className={cl.Progress__line_gray}>
                                    <motion.section 
                                        className={item.className}
                                        variants={progressVariants}
                                        style={{ transformOrigin: "left" }}
                                    />
                                </section>
                                <motion.p
                                    whileHover={{ opacity: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.info}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.section>
                </div>
            </motion.div>
        </>
    )
}