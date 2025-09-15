import cl from './styles.module.scss'
import type {QualityProps} from './types'
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

const qualityItemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    },
    hover: {
        y: -3,
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeOut" as const
        }
    }
};

const defaultQualityData: QualityProps = {
    Quality: {
        heading: "Личные качества",
    },
    QualityInfo: {
        educationInfo: "Быстрое обучение",
        communicationInfo: "Коммуникабельность",
        detailsInfo: "Внимание к деталям",
        organizationInfo: "Самоорганизация",
        teamWorkInfo: "Командная работа",
        thinkingInfo: "Критическое мышление",
        problemsInfo: "Решение проблем",
        adaptiveInfo: "Адаптивность"
    }
}

export const Quality: React.FC<QualityProps> = (props = defaultQualityData) => {
    const qualityData = {...defaultQualityData, ...props}
    const quality = qualityData.Quality || defaultQualityData.Quality
    const qualityInfo = qualityData.QualityInfo || defaultQualityData.QualityInfo

    return(
        <>
        <motion.div 
            className={cl.Quality}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={cl.Quality__container}>
                <motion.h3 
                    variants={headerVariants}
                >
                    {quality?.heading}
                </motion.h3>
                <motion.section
                    variants={containerVariants}
                >
                    {[
                        qualityInfo?.educationInfo,
                        qualityInfo?.detailsInfo,
                        qualityInfo?.teamWorkInfo,
                        qualityInfo?.problemsInfo,
                        qualityInfo?.communicationInfo,
                        qualityInfo?.organizationInfo,
                        qualityInfo?.thinkingInfo,
                        qualityInfo?.adaptiveInfo
                    ].map((item, index) => (
                        <motion.span
                            key={index}
                            variants={qualityItemVariants}
                            whileHover="hover"
                        >
                            {item}
                        </motion.span>
                    ))}
                </motion.section>
            </div>
        </motion.div>
        </>
    )
}