import cl from './styles.module.scss'
import type {CoverProps} from './types'
import React from 'react'
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

const sectionVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
};

const cardVariants = {
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

const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    },
    hover: {
        x: 5,
        transition: {
            duration: 0.2
        }
    }
};

const defaultCoverData: CoverProps = {
    CoverHeader: {
        header: 'Обо мне',
        header_info: 'Узнайте больше о моем пути в разработке'
    },
    CoverInfo: {
        heading: 'Мой путь в программировании',
        CoverInfo__text_1: "Привет! Меня зовут Stokeyer, и я начинающий Frontend\nразработчик с большой страстью к созданию красивых и\nфункциональных веб-интерфейсов. Мой путь в программировании\nначался с изучения основ  HTML и CSS, и с тех пор\nя постоянно развиваюсь в этой области.",
        CoverInfo__text_2: "За время обучения я освоил современные технологии, такие\nкак React, TypeScript, и различные инструменты для стилизации\nвключая SCSS и CSS-фреймворки. Я верю в важность написания\nчистого, поддерживаемого кода и следую лучшим практикам\nразработки.",
        CoverInfo__text_3: "Моя цель — стать частью команды, где я смогу применить свои\nзнания, продолжить обучение и внести вклад в создание\nкачественных продуктов, которые решают реальные проблемы\nпользователей."
    },
    CoverCards: {
        heading: 'Быстрые факты',
        location: 'Локация',
        locationInfo: 'Симферополь, Россия',
        experience: 'Опыт',
        experienceInfo: 'Начинающий\nразработчик',
        education: 'Образование',
        educationInfo: 'Самообучение + курсы',
        language: 'Языки',
        languageInfo: 'Русский (родной),\nАнглийский (A1)'
    },
    CoverMotivation: {
        heading: 'Что меня мотивирует',
        CoverMotivation__First: "Создание интуитивных пользовательских интерфейсов",
        CoverMotivation__Second: "Изучение новых технологий и подходов к разработке",       
        CoverMotivation__Third: "Решение сложных задач через код",
        CoverMotivation__Fourth: "Работа в команде и обмен знаниями",
    },
    CoverReady: {
        heading: 'Готов к работе',
        information: 'Ищу возможность\nприсоединиться к\nкоманде в качестве Junior\nFrontend разработчика.',
        intern: '✓ Готов к стажировке',
        education: '✓ Открыт к обучению',
        team: '✓ Командный игрок'
    }
}



export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const CoverHeader = CoverData.CoverHeader || defaultCoverData.CoverHeader;
    const CoverInfo = CoverData.CoverInfo || defaultCoverData.CoverInfo;
    const CoverCards = CoverData.CoverCards  || defaultCoverData.CoverCards
    const CoverMotivation = CoverData.CoverMotivation || defaultCoverData.CoverMotivation
    const CoverReady = CoverData.CoverReady || defaultCoverData.CoverReady

    return(
        <>
        <motion.div 
            className={cl.Cover}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={cl.Cover__container}>
                <motion.h2 
                    variants={headerVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    {CoverHeader?.header}
                </motion.h2>
                <motion.p 
                    variants={headerVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {CoverHeader?.header_info}
                </motion.p>
                <motion.section 
                    className={cl.Cover__section}
                    variants={sectionVariants}
                >
                    <motion.div 
                        className={cl.Cover__information}
                        variants={sectionVariants}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {CoverInfo?.heading}
                        </motion.h2>
                        <motion.div 
                            className={cl.Cover__information_container}
                            variants={containerVariants}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                {CoverInfo?.CoverInfo__text_1}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                {CoverInfo?.CoverInfo__text_2}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                            >
                                {CoverInfo?.CoverInfo__text_3}
                            </motion.p>
                        </motion.div> 
                        <motion.div 
                            className={cl.Cover__motivation}
                            variants={sectionVariants}
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {CoverMotivation?.heading}
                            </motion.h3>
                            <motion.ul variants={containerVariants}>
                                <motion.li 
                                    variants={listItemVariants}
                                    whileHover="hover"
                                >
                                    <p>{CoverMotivation?.CoverMotivation__First}</p>
                                </motion.li>
                                <motion.li 
                                    variants={listItemVariants}
                                    whileHover="hover"
                                >
                                    <p>{CoverMotivation?.CoverMotivation__Second}</p>
                                </motion.li>
                                <motion.li 
                                    variants={listItemVariants}
                                    whileHover="hover"
                                >
                                    <p>{CoverMotivation?.CoverMotivation__Third}</p>
                                </motion.li>
                                <motion.li 
                                    variants={listItemVariants}
                                    whileHover="hover"
                                >
                                    <p>{CoverMotivation?.CoverMotivation__Fourth}</p>
                                </motion.li>
                            </motion.ul>
                        </motion.div> 
                    </motion.div>
                    <motion.div 
                        className={cl.Cover__cards}
                        variants={containerVariants}
                    >
                        <motion.div 
                            className={cl.Cover__cards_facts}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {CoverCards?.heading}
                            </motion.h3>
                            <motion.section
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.7, duration: 0.5 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <h4>{CoverCards?.location}</h4>
                                <p>{CoverCards?.locationInfo}</p>
                            </motion.section>
                            <motion.section
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.9, duration: 0.5 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <h4>{CoverCards?.experience}</h4>
                                <p>{CoverCards?.experienceInfo}</p>
                            </motion.section>
                            <motion.section
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.1, duration: 0.5 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <h4>{CoverCards?.education}</h4>
                                <p>{CoverCards?.educationInfo}</p>
                            </motion.section>
                            <motion.section
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.3, duration: 0.5 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <h4>{CoverCards?.language}</h4>
                                <p>{CoverCards?.languageInfo}</p>
                            </motion.section>
                        </motion.div>
                        <motion.div 
                            className={cl.Cover__cards_ready}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {CoverReady?.heading}
                            </motion.h3>
                            <motion.section
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8, duration: 0.5 }}
                            >
                                <motion.p
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {CoverReady?.information}
                                </motion.p>
                                <motion.nav variants={containerVariants}>
                                    <motion.p
                                        variants={listItemVariants}
                                        whileHover="hover"
                                    >
                                        {CoverReady?.intern}
                                    </motion.p>
                                    <motion.p
                                        variants={listItemVariants}
                                        whileHover="hover"
                                    >
                                        {CoverReady?.education}
                                    </motion.p>
                                    <motion.p
                                        variants={listItemVariants}
                                        whileHover="hover"
                                    >
                                        {CoverReady?.team}
                                    </motion.p>
                                </motion.nav>
                            </motion.section>
                        </motion.div>
                    </motion.div>

                </motion.section>
            </div>
        </motion.div>
        </>
    )
}   