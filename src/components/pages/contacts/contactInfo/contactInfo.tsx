import cl from "./styles.module.scss";
import type { ContactInfoProps } from "./types";
import { motion } from "framer-motion";

// Более интерактивные варианты анимаций
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            staggerChildren: 0.3,
            delayChildren: 0.4
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 40, 
        scale: 0.9,
        rotateX: -15
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1] as const,
            type: "spring" as const,
            stiffness: 80,
            damping: 15
        }
    },
    hover: {
        y: -8,
        scale: 1.02,
        rotateX: 5,
        rotateY: 2,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    },
    tap: {
        scale: 0.98,
        y: -4,
        transition: {
            duration: 0.2
        }
    }
};

const iconVariants = {
    hidden: { 
        scale: 0.5, 
        opacity: 0,
        rotate: -180
    },
    visible: { 
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 1.2,
            delay: 0.6,
            ease: "backOut" as const
        }
    },
    hover: {
        scale: 1.1,
        rotate: 10,
        transition: {
            duration: 0.4,
            ease: "easeOut" as const
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 1.0,
            delay: 0.8
        }
    },
    hover: {
        y: -2,
        transition: {
            duration: 0.4
        }
    }
};

const defaultContactInfoProps: ContactInfoProps = {
    ContactInfoContainer: {
        heading: "Контактная информация",
    },
    ContactInfoEmail: {
        heading: "Email",
        email: "ellkaellka1337@gmail.com",
        emailInfo: "Лучший способ связаться со мной",
    },
    ContactInfoTelegram: {
        heading: "Telegram",
        telegram: "https://t.me/stokeyer",
        telegramInfo: "Быстрые сообщения и связь",
    },
    ContactInfoGitHub: {
        heading: "GitHub",
        gitHub: "github.com/stokeyer",
        gitHubInfo: "Мои проекты и код",
    },
    ContactInfohh: {
        heading: "hh.ru",
        hh: "https://hh.ru/resume/stokeyer",
        hhInfo: "Профессиональная сеть",
    },
}




export const ContactInfo = (props: ContactInfoProps) => {
    const contactInfoData = { ...defaultContactInfoProps, ...props };
    const ContactInfoContainer = contactInfoData.ContactInfoContainer;
    const ContactInfoEmail = contactInfoData.ContactInfoEmail;
    const ContactInfoTelegram = contactInfoData.ContactInfoTelegram;
    const ContactInfoGitHub = contactInfoData.ContactInfoGitHub;
    const ContactInfohh = contactInfoData.ContactInfohh;

    return (
        <motion.div 
            className={cl.ContactInfo}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={cl.ContactInfo__container}>
                <motion.h2 
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "backOut" as const,
                        delay: 0.1
                    }}
                    whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.4 }
                    }}
                >
                    {ContactInfoContainer?.heading}
                </motion.h2>
                <motion.div 
                    className={cl.ContactInfo__cards} 
                    variants={containerVariants}
                >
                    {/* Email Card */}
                    <motion.section 
                        className={cl.ContactInfo__card} 
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <motion.a 
                            href={`mailto:${ContactInfoEmail?.email}`} 
                            className={cl.ContactInfo__card_link}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={cl.ContactInfo__card_content}>
                                <motion.div 
                                    className={cl.ContactInfo__card_icon}
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <motion.svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                                    </motion.svg>
                                </motion.div>
                                <motion.div 
                                    className={cl.ContactInfo__card_info}
                                    variants={textVariants}
                                    whileHover="hover"
                                >
                                    <motion.h3 
                                        className={cl.ContactInfo__card_heading}
                                        whileHover={{ color: "#3b82f6" }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoEmail?.heading}
                                    </motion.h3>
                                    <motion.span 
                                        className={cl.ContactInfo__card_link_text}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoEmail?.email}
                                    </motion.span>
                                    <motion.p 
                                        className={cl.ContactInfo__card_description}
                                        whileHover={{ opacity: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoEmail?.emailInfo}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.section>

                    {/* Telegram Card */}
                    <motion.section 
                        className={cl.ContactInfo__card} 
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <motion.a 
                            href={ContactInfoTelegram?.telegram} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={cl.ContactInfo__card_link}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={cl.ContactInfo__card_content}>
                                <motion.div 
                                    className={cl.ContactInfo__card_icon}
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <motion.svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.787L21.928 5.27c.313-1.287-.515-1.785-1.263-1.553z" fill="white"/>
                                    </motion.svg>
                                </motion.div>
                                <motion.div 
                                    className={cl.ContactInfo__card_info}
                                    variants={textVariants}
                                    whileHover="hover"
                                >
                                    <motion.h3 
                                        className={cl.ContactInfo__card_heading}
                                        whileHover={{ color: "#0088cc" }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoTelegram?.heading}
                                    </motion.h3>
                                    <motion.span 
                                        className={cl.ContactInfo__card_link_text}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        @stokeyer
                                    </motion.span>
                                    <motion.p 
                                        className={cl.ContactInfo__card_description}
                                        whileHover={{ opacity: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoTelegram?.telegramInfo}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.section>

                    {/* GitHub Card */}
                    <motion.section 
                        className={cl.ContactInfo__card} 
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <motion.a 
                            href={`https://${ContactInfoGitHub?.gitHub}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={cl.ContactInfo__card_link}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={cl.ContactInfo__card_content}>
                                <motion.div 
                                    className={cl.ContactInfo__card_icon}
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <motion.svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="white"/>
                                    </motion.svg>
                                </motion.div>
                                <motion.div 
                                    className={cl.ContactInfo__card_info}
                                    variants={textVariants}
                                    whileHover="hover"
                                >
                                    <motion.h3 
                                        className={cl.ContactInfo__card_heading}
                                        whileHover={{ color: "#333" }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoGitHub?.heading}
                                    </motion.h3>
                                    <motion.span 
                                        className={cl.ContactInfo__card_link_text}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoGitHub?.gitHub}
                                    </motion.span>
                                    <motion.p 
                                        className={cl.ContactInfo__card_description}
                                        whileHover={{ opacity: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfoGitHub?.gitHubInfo}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.section>

                    {/* hh.ru Card */}
                    <motion.section 
                        className={cl.ContactInfo__card} 
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <motion.a 
                            href="https://hh.ru/resume/7c7290acff0ec91ce80039ed1f43694e6e6f6b" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={cl.ContactInfo__card_link}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={cl.ContactInfo__card_content}>
                                <motion.div 
                                    className={cl.ContactInfo__card_icon}
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <motion.svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <motion.text 
                                            x="12" 
                                            y="16" 
                                            textAnchor="middle" 
                                            fontSize="16" 
                                            fontWeight="bold" 
                                            fontFamily="Arial, sans-serif" 
                                            fill="white"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            hh
                                        </motion.text>
                                    </motion.svg>
                                </motion.div>
                                <motion.div 
                                    className={cl.ContactInfo__card_info}
                                    variants={textVariants}
                                    whileHover="hover"
                                >
                                    <motion.h3 
                                        className={cl.ContactInfo__card_heading}
                                        whileHover={{ color: "#ff6600" }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfohh?.heading}
                                    </motion.h3>
                                    <motion.span 
                                        className={cl.ContactInfo__card_link_text}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        hh.ru/resume/stokeyer
                                    </motion.span>
                                    <motion.p 
                                        className={cl.ContactInfo__card_description}
                                        whileHover={{ opacity: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {ContactInfohh?.hhInfo}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.section>

                </motion.div>
            </div>
        </motion.div>
    )
}
