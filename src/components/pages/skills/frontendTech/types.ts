export interface  FrontendProps {
    className?: string;
    Frontend?: Frontend;
    FrontendInfo?: FrontendInfo;
}

export interface Frontend{
    heading: string;
    html5: string;
    html5Percent: string;
    css3: string;
    css3Percent: string;
    sass: string;
    sassPercent: string;
    javaScript: string;
    javaScriptPercent: string;
    typeScript: string;
    typeScriptPercent: string;
    react: string;
    reactPercent: string;
}
export interface FrontendInfo{
    html5Info: string;
    css3Info: string;
    sassInfo: string;
    javaScriptInfo: string;
    typeScriptInfo: string;
    reactInfo: string;
}