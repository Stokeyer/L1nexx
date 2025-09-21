
import cl from "./styles.module.scss";
import type { SendMailProps } from "./types";
import { motion } from "framer-motion";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

// Анимации для формы
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.0,
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const formVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
            type: "spring" as const,
            stiffness: 120,
            damping: 12
        }
    }
};

const fieldVariants = {
    hidden: {
        opacity: 0,
        x: -30,
        scale: 0.9,
        rotateY: -5
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
            type: "spring" as const,
            stiffness: 100,
            damping: 10
        }
    },
    hover: {
        scale: 1.02,
        y: -2,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const
        }
    }
};

const buttonVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
            type: "spring" as const,
            stiffness: 100,
            damping: 8
        }
    }
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: -30,
        scale: 0.8,
        rotateX: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1] as const,
            type: "spring" as const,
            stiffness: 120,
            damping: 10
        }
    }
};

const defaultSendMailProps: SendMailProps = {
    SendMailContainer: {
        heading: "Отправить сообщение",
    },
    SendMailForm: {
        name: "Имя",
        email: "Email",
        company: "Компания",
        theme: "Тема",
        message: "Сообщение",
        button: "Отправить",
    }

}


export const SendMail = (props: SendMailProps) => {
    const sendMailData = { ...defaultSendMailProps, ...props };
    const SendMailContainer = sendMailData.SendMailContainer;
    const [selectedTheme, setSelectedTheme] = useState('');

    const themeOptions = [
        { value: '', label: 'Выберите тему' },
        { value: 'collaboration', label: 'Сотрудничество' },
        { value: 'project', label: 'Проект' },
        { value: 'consultation', label: 'Консультация' },
        { value: 'other', label: 'Другое' }
    ];
    return (
        <>
        <motion.div
            className={cl.SendMail}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={cl.SendMail__container}>
                <motion.h2
                    variants={titleVariants}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                >
                    {SendMailContainer?.heading}
                </motion.h2>

                <motion.form
                    className={cl.SendMail__form}
                    variants={formVariants}
                >
                    <motion.div
                        className={cl.SendMail__form_group}
                        variants={fieldVariants}
                        whileHover="hover"
                    >
                        <label htmlFor="name" className={cl.SendMail__label}>Имя *</label>
                        <motion.input
                            type="text"
                            id="name"
                            className={cl.SendMail__input}
                            placeholder="Ваше имя"
                            required
                            whileFocus={{
                                scale: 1.02,
                                y: -1,
                                transition: { duration: 0.2 }
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className={cl.SendMail__form_group}
                        variants={fieldVariants}
                        whileHover="hover"
                    >
                        <label htmlFor="email" className={cl.SendMail__label}>Email *</label>
                        <motion.input
                            type="email"
                            id="email"
                            className={cl.SendMail__input}
                            placeholder="your.email@example.com"
                            required
                            whileFocus={{
                                scale: 1.02,
                                y: -1,
                                transition: { duration: 0.2 }
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className={cl.SendMail__form_group}
                        variants={fieldVariants}
                        whileHover="hover"
                    >
                        <label htmlFor="company" className={cl.SendMail__label}>Компания</label>
                        <motion.input
                            type="text"
                            id="company"
                            className={cl.SendMail__input}
                            placeholder="Название компании"
                            whileFocus={{
                                scale: 1.02,
                                y: -1,
                                transition: { duration: 0.2 }
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className={cl.SendMail__form_group}
                        variants={fieldVariants}
                        whileHover="hover"
                    >
                        <label htmlFor="theme" className={cl.SendMail__label}>Тема *</label>
                        <motion.div
                            whileFocus={{
                                scale: 1.02,
                                y: -1,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <CustomSelect
                                options={themeOptions}
                                value={selectedTheme}
                                onChange={setSelectedTheme}
                                placeholder="Выберите тему"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={cl.SendMail__form_group}
                        variants={fieldVariants}
                    >
                        <label htmlFor="message" className={cl.SendMail__label}>Сообщение *</label>
                        <motion.textarea
                            id="message"
                            className={cl.SendMail__textarea}
                            placeholder="Расскажите подробнее о вашем предложении..."
                            rows={4}
                            required
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className={cl.SendMail__button}
                        variants={buttonVariants}
                    >
                        <span>Отправить сообщение</span>
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    
    </>
)}