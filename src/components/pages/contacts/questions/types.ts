export interface QuestionsProps {
    QuestionsContainer?: QuestionsContainer;
    Questions?: Questions;
}

export interface Questions {
    heading: string;
}

export interface QuestionsContainer {
    question: string;
    answer: string;
}
