export interface SendMailProps {
    className?: string;
    SendMailContainer?: SendMailContainer;
    SendMailForm?: SendMailForm;
}

export interface SendMailContainer {
    heading: string;
}

export interface SendMailForm {
    name: string;
    email: string;
    company: string;
    theme: string;
    message: string;
    button: string;
}