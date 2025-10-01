
import cl from "./styles.module.scss";
import type { SendMailProps } from "./types";
import { motion, AnimatePresence } from "framer-motion";
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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const themeOptions = [
        { value: '', label: 'Выберите тему' },
        { value: 'collaboration', label: 'Сотрудничество' },
        { value: 'project', label: 'Проект' },
        { value: 'consultation', label: 'Консультация' },
        { value: 'other', label: 'Другое' }
    ];

    const getThemeLabel = (themeValue: string) => {
        const theme = themeOptions.find(option => option.value === themeValue);
        return theme ? theme.label : themeValue;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const sendToTelegram = async (data: any) => {
        const botToken = 'BOT-TOKEN';
        const chatId = 'USERID';
        
        const message = `📧 Новое сообщение с сайта

👤 Имя: ${data.name}
📧 Email: ${data.email}
🏢 Компания: ${data.company || 'Не указана'}
📋 Тема: ${getThemeLabel(data.theme)}
💬 Сообщение: ${data.message}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            }),
        });

        return response.ok;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!selectedTheme) {
            setSubmitStatus({
                type: 'error',
                message: 'Пожалуйста, выберите тему сообщения'
            });
            setTimeout(() => {
                setSubmitStatus({ type: null, message: '' });
            }, 5000);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const success = await sendToTelegram({
                ...formData,
                theme: selectedTheme
            });

            if (success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Сообщение успешно отправлено в Telegram!'
                });
                
                // Очищаем форму после успешной отправки
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
                setSelectedTheme('');
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: 'Ошибка при отправке сообщения'
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Ошибка соединения с Telegram'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitStatus({ type: null, message: '' });
            }, 5000);
        }
    };
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
                    onSubmit={handleSubmit}
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
                            name="name"
                            className={cl.SendMail__input}
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleInputChange}
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
                            name="email"
                            className={cl.SendMail__input}
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
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
                            name="company"
                            className={cl.SendMail__input}
                            placeholder="Название компании"
                            value={formData.company}
                            onChange={handleInputChange}
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
                            name="message"
                            className={cl.SendMail__textarea}
                            placeholder="Расскажите подробнее о вашем предложении..."
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </motion.div>

                    {submitStatus.type && (
                        <motion.div
                            className={`${cl.SendMail__status} ${cl[`SendMail__status_${submitStatus.type}`]}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {submitStatus.message}
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {submitStatus.type !== 'success' && 
                         submitStatus.type !== 'error' && (
                            <motion.button
                                key="submit-button"
                                type="submit"
                                className={cl.SendMail__button}
                                variants={buttonVariants}
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span>
                                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                                </span>
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.form>
            </div>
        </motion.div>
    
    </>
)}