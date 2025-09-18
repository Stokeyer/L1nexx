import React from 'react'
import cl from './styles.module.scss'
import avatarWebp from '../../../assets/optimized/avatar-optimized.webp'
import avatarAvif from '../../../assets/optimized/avatar-optimized.avif'
import avatarOriginal from '../../../assets/cover/avatar.webp'
import type {CoverProps} from './types'
import { motion } from 'framer-motion'
import ResponsiveImage from '../../../ResponsiveImage'


const defaultCoverData: CoverProps = {
    CoverInfo: {
        nickname: 'Stokeyer',
        job: 'Frontend Developer',
        text: 'Разработчик с опытом создания современных веб-приложений на \n React, TypeScript, JavaScript, HTML, CSS и SCSS'
    },
    CoverCards: {
        title_code: 'Чистый код',
        title_design: "Адаптивный дизайн",
        title_education: "Быстрое обучение",
        info_code: "Пишу читаемый и поддерживаемый \n код следуя лучшим практикам",
        info_design: "Создаю интерфейсы, которые отлично \n работают на всех устройствах",
        info_education: "Быстро осваиваю новые технологии и \n готов к вызовам"
    }
}

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

const infoVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
};

const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 1,
            ease: "backOut" as const
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

const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
};


export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const coverInfo = CoverData.CoverInfo || defaultCoverData.CoverInfo;
    const coverCards = CoverData.CoverCards || defaultCoverData.CoverCards

    const handleNavigation = (path: string) => {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
        
    };

    return(
        <>
        <motion.div 
            className={cl.Cover}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={cl.Cover__container}>
                <motion.section 
                    className={cl.Cover__info}
                    variants={infoVariants}
                >
                    <ResponsiveImage 
                        src={avatarOriginal}
                        avifSrc={avatarAvif}
                        webpSrc={avatarWebp}
                        fallbackSrc={avatarOriginal}
                        alt="avatar" 
                        variants={avatarVariants}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        priority={true}
                        width={200}
                        height={200}
                        sizes="200px"
                    />
                    <motion.h1 
                        className={cl.Cover__nickname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {coverInfo?.nickname}
                    </motion.h1>
                    <motion.h2 
                        className={cl.Cover__job}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        {coverInfo?.job || 'Frontend Developer'}
                    </motion.h2>
                    <motion.p 
                        className={cl.Cover__text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        {coverInfo?.text || 'Разработчик с опытом создания современных веб-приложений'}
                    </motion.p>
                </motion.section>
                <motion.div 
                    className={cl.Cover__button_container}
                    variants={buttonVariants}
                >
                    <motion.button 
                        onClick={() => handleNavigation('/project')} 
                        className={cl.Cover__button_project}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Посмотреть проекты
                    </motion.button>
                    <motion.button 
                        onClick={() => handleNavigation('/contacts')} 
                        className={cl.Cover__button_contacts}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Связаться со мной
                    </motion.button>
                </motion.div>
                <motion.div 
                    className={cl.Cover__cards}
                    variants={containerVariants}
                >
                    <motion.div 
                        className={cl.Cover__cards_code}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.span
                            initial={{ rotate: -180 }}
                            animate={{ rotate: 0 }}
                            transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }}
                        >
                            <svg className={cl.Cover__cards_code_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </motion.span>
                        <h2>{coverCards?.title_code}</h2>
                        <p>{coverCards?.info_code}</p>
                    </motion.div>
                    <motion.div 
                        className={cl.Cover__cards_design}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.span
                            initial={{ rotate: -180 }}
                            animate={{ rotate: 0 }}
                            transition={{ delay: 1.4, duration: 0.8, ease: "backOut" }}
                        >
                            <svg className={cl.Cover__cards_design_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        </motion.span>
                        <h2>{coverCards?.title_design}</h2>
                        <p>{coverCards?.info_design}</p>
                    </motion.div>
                    <motion.div 
                        className={cl.Cover__cards_education}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.span
                            initial={{ rotate: -180 }}
                            animate={{ rotate: 0 }}
                            transition={{ delay: 1.6, duration: 0.8, ease: "backOut" }}
                        >
                            <svg className={cl.Cover__cards_education_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </motion.span>
                        <h2>{coverCards?.title_education}</h2>
                        <p>{coverCards?.info_education}</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
        </>
    )
}