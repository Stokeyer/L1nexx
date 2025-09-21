import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cl from './styles.module.scss';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
    options, 
    value, 
    onChange, 
    placeholder = "Выберите опцию" 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(option => option.value === value);

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleOptionClick = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={cl.custom_select} ref={selectRef}>
            <div 
                className={cl.custom_select__trigger}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <span className={cl.custom_select__value}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <div className={cl.custom_select__arrow}>
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </div>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className={cl.custom_select__dropdown}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {options.map((option) => (
                            <motion.div
                                key={option.value}
                                className={`${cl.custom_select__option} ${
                                    option.value === value ? cl.custom_select__option_selected : ''
                                }`}
                                onClick={() => handleOptionClick(option.value)}
                                whileHover={{ backgroundColor: '#f3f4f6' }}
                                transition={{ duration: 0.1 }}
                            >
                                {option.label}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomSelect;
