import cl from './styles.module.scss'
import type {MyTechSkillsProps} from './types'
import { motion } from 'framer-motion'

// Варианты анимаций для Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.1
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

const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};

const defaultMyTechSkillsData: MyTechSkillsProps = {
    MyTechSkills: {
        heading: 'Навыки и технологии',
        headingInfo: 'Мой технический стек и уровень владения'
    }
}

export const MyTechSkills: React.FC<MyTechSkillsProps> = (props = defaultMyTechSkillsData) => {
    const MyTechSkillsData = {...defaultMyTechSkillsData, ...props}
    const MyTechSkills =  MyTechSkillsData.MyTechSkills || defaultMyTechSkillsData.MyTechSkills 

    return (
        <>
            <motion.div 
                className={cl.MyTechSkills}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={cl.MyTechSkills__container}>
                    <motion.h3 
                        variants={headerVariants}
                    >
                        {MyTechSkills?.heading}
                    </motion.h3>
                    <motion.p 
                        variants={textVariants}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                    >
                        {MyTechSkills?.headingInfo}
                    </motion.p>
                </div>
            </motion.div>
        </>
    )}
