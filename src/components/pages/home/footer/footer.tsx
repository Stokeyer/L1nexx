import cl from "./styles.module.scss";
import HhLogo from './../../../assets/footer/hh.svg';
import type { footerProps } from "./types";
import { motion } from "framer-motion";

const defaultFooterData: footerProps = {
    sectionlink: {
        portfolio: "Frontend Developer Portfolio",
    },
    copyright: {
        copyrightText: "© 2025 Frontend Developer Portfolio.",
        created: "Создано с использованием React, TypeScript и ScSS",
    },
};

// Варианты анимаций для Framer Motion
const footerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
};

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.2 as const
        }
    }
};

const navVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    }
};

const linkVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "backOut" as const
        }
    }
};

export const Footer: React.FC<footerProps> = (props = defaultFooterData) => {
    const FooterData = { ...defaultFooterData, ...props };
    const Footerlink = FooterData.sectionlink;
    const FooterCopyrigt = FooterData.copyright;
    return (
        <>
            <motion.div 
                className={`${cl.footer} ${FooterData.className || ''}`}
                variants={footerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={cl.footer__container}>
                    <motion.section 
                        className={cl.footer__section_link}
                        variants={sectionVariants}
                    >
                        <motion.nav variants={navVariants}>
                            <motion.a 
                                href="./"
                                variants={linkVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className={cl.logo}>FD</span>
                            </motion.a>
                            <motion.a 
                                href="./" 
                                className={cl.logo__text}
                                variants={linkVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>{Footerlink?.portfolio}</span>
                            </motion.a>
                        </motion.nav>
                        <motion.nav 
                            className={cl.footer__section_nav_link}
                            variants={navVariants}
                        >
                            <motion.a
                                href="https://github.com/stokeyer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                variants={linkVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.svg 
                                    className="w-5 h-5" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </motion.svg>
                            </motion.a>
                            <motion.a
                                href="https://hh.ru/resume/7c7290acff0ec91ce80039ed1f43694e6e6f6b"
                                variants={linkVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.img
                                    src={HhLogo}
                                    alt="HeadHunter"
                                    className="w-5 h-5"
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        </motion.nav>
                    </motion.section>
                    <motion.section 
                        className={cl.footer__section_copyright}
                        variants={navVariants}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {FooterCopyrigt?.copyrightText} {FooterCopyrigt?.created}
                        </motion.p>
                    </motion.section>
                </div>
            </motion.div>
        </>
    );
};
