export interface ContactInfoProps {
    className?: string;
    ContactInfoContainer?: ContactInfoContainer;
    ContactInfoEmail?: ContactInfoEmail;
    ContactInfoTelegram?: ContactInfoTelegram;
    ContactInfoGitHub?: ContactInfoGitHub;
    ContactInfohh?: ContactInfohh;
}

export interface ContactInfoContainer {
    heading: string;
}

export interface ContactInfoEmail {
    heading: string;
    email: string;
    emailInfo: string;
}

export interface ContactInfohh {
    heading: string;
    hh: string;
    hhInfo: string;
}

export interface ContactInfoGitHub {
    heading: string;
    gitHub: string;
    gitHubInfo: string;
}
export interface ContactInfoTelegram {
    heading: string;
    telegram: string;
    telegramInfo: string;
}
