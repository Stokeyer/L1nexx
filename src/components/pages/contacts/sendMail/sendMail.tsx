
import cl from "./styles.module.scss";
import type { SendMailProps } from "./types";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

// Кастомный компонент выпадающего меню
const CustomSelect = ({ options, value, onChange, placeholder }: {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const selectedOption = options.find(option => option.value === value);

    // Закрытие при клике вне элемента
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Закрытие при нажатии Escape
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <div className={cl.custom_select} ref={selectRef}>
            <motion.div 
                className={cl.custom_select__trigger}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                }}
            >
                <span className={cl.custom_select__value}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <motion.div 
                    className={cl.custom_select__arrow}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </motion.div>
            </motion.div>
            
            {isOpen && (
                <motion.div 
                    className={cl.custom_select__dropdown}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    {options.map((option) => (
                        <motion.div
                            key={option.value}
                            className={`${cl.custom_select__option} ${value === option.value ? cl.custom_select__option_selected : ''}`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            whileHover={{ 
                                backgroundColor: value === option.value ? '#0062ff' : '#f3f4f6',
                                color: value === option.value ? '#ffffff' : '#8696b1'
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {option.label}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

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
                        whileHover="hover"
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
                        Отправить сообщение
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    )
}