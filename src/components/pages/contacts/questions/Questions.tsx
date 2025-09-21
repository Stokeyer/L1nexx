import cl from "./styles.module.scss";
import type { QuestionsProps } from "./types";



const defaultQuestionsProps: QuestionsProps = {
        Questions: {
            heading: "Часто задаваемые вопросы",
        },
        QuestionsContainer: {
            question: "",
            answer: ""
        }
}

const allQuestions = [
    {
        question: "Какой у вас опыт работы?",
        answer: "Я начинающий разработчик с активным изучением\nсовременных технологий. Имею опыт создания личных\nпроектов и готов применить знания в коммерческой\nразработке."
    },
    {
        question: "Готовы ли вы к удаленной работе?",
        answer: "Да, я готов работать как удаленно, так и в офисе. Имею опыт\nсамоорганизации и использования инструментов для\nкомандной работы."
    },
    {
        question: "Какие технологии вы изучаете?",
        answer: "Сейчас углубляю знания React и TypeScript, изучаю Next.js и\nпланирую освоить тестирование. Всегда открыт к изучению\nновых технологий."
    },
    {
        question: "Как быстро отвечаете на сообщения?",
        answer: "Обычно отвечаю в течение 24 часов. Для срочных вопросов\nлучше использовать телефон или LinkedIn."
    }
]


export const Questions = (props?: QuestionsProps) => {
    const questionsData = { ...defaultQuestionsProps, ...props };

    return (
        <>
        <div className={cl.Questions}>
            <div className={cl.Questions__container}>
                <h2>{questionsData.Questions?.heading}</h2>
                <div className={cl.Questions__text_container}>
                    {allQuestions.map((item, index) => (
                        <div key={index} className={cl.Questions__item}>
                            <h3 className={cl.Questions__question}>{item.question}</h3>
                            <p className={cl.Questions__answer}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}