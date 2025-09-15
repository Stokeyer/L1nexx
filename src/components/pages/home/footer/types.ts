export interface footerProps{
    sectionlink?: sectionlink;
    copyright?: copyright;
    className?: string;
}

export interface sectionlink{
    portfolio: string;
}

export interface copyright{
    copyrightText: string;
    created: string;
}