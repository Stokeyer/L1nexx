import cl from './styles.module.scss'
import type {toolsProps} from './types'
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

const skillItemVariants = {
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

const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1.2,
            ease: "easeOut" as const,
            delay: 0.5
        }
    }
};

const defaultToolsData: toolsProps = {
    tools: {
        heading: 'Tools & Workflow',
        git: 'Git',
        gitPercent: '70%',
        webpack: 'Webpack',
        webpackPercent: '60%',
        vite: 'Vite',
        vitePercent: '75%',
        npm: 'NPM/Yarn',
        npmPercent: '80%',
        vsCode: 'VS Code',
        vsCodePercent: '90%',
        chromeDevTools: 'Chrome DevTools',
        chromeDevToolsPercent: '75%'
    },
    toolsInfo: {
        gitInfo: "Контроль версий, ветвление",
        webpackInfo: "Сборка проектов, оптимизация",
        viteInfo: "Быстрая разработка, HMR",
        npmInfo: "Управление пакетами",
        vscodeInfo: "Настройка, расширения, отладка",
        chromeDevToolsInfo: "Отладка, профилирование"
    }
}

export const Tools: React.FC<toolsProps> = (props = defaultToolsData) => {
    const toolsData = {...defaultToolsData, ...props}
    const tools = toolsData.tools || defaultToolsData.tools
    const toolsInfo = toolsData.toolsInfo || defaultToolsData.toolsInfo

    return(
        <>
            <motion.div 
                className={cl.tools}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={cl.tools__container}>
                    <motion.h2 
                        variants={headerVariants}
                    >
                        {tools?.heading}
                    </motion.h2>
                    <motion.section 
                        className={cl.tools__section}
                        variants={containerVariants}
                    >
                        {[
                            { name: tools?.git, percent: tools?.gitPercent, info: toolsInfo?.gitInfo, color: "#f05032", className: cl.Progress__line_git },
                            { name: tools?.webpack, percent: tools?.webpackPercent, info: toolsInfo?.webpackInfo, color: "#8dd6f9", className: cl.Progress__line_webpack },
                            { name: tools?.vite, percent: tools?.vitePercent, info: toolsInfo?.viteInfo, color: "#646cff", className: cl.Progress__line_vite },
                            { name: tools?.npm, percent: tools?.npmPercent, info: toolsInfo?.npmInfo, color: "#cb3837", className: cl.Progress__line_npm },
                            { name: tools?.vsCode, percent: tools?.vsCodePercent, info: toolsInfo?.vscodeInfo, color: "#007acc", className: cl.Progress__line_vsCode },
                            { name: tools?.chromeDevTools, percent: tools?.chromeDevToolsPercent, info: toolsInfo?.chromeDevToolsInfo, color: "#4285f4", className: cl.Progress__line_chromeDevTools }
                        ].map((tool, index) => (
                            <motion.div
                                key={index}
                                variants={skillItemVariants}
                                whileHover="hover"
                            >
                                <motion.nav
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.h3
                                        whileHover={{ color: tool.color }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {tool.name}
                                    </motion.h3>
                                    <motion.p
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {tool.percent}
                                    </motion.p>
                                </motion.nav>
                                <section className={cl.Progress__line_gray}>
                                    <motion.section 
                                        className={tool.className}
                                        variants={progressVariants}
                                        style={{ transformOrigin: "left" }}
                                    />
                                </section>
                                <motion.p
                                    whileHover={{ opacity: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {tool.info}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.section>
                </div>
            </motion.div>
        </>
    )
}