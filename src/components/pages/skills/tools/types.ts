

export interface toolsProps{
    className?: string; 
    tools?: tools;
    toolsInfo?: toolsInfo;
}

export interface tools{
    heading: string;
    git: string;
    gitPercent: string;
    webpack: string;
    webpackPercent: string;
    vite: string;
    vitePercent: string;
    npm: string;
    npmPercent: string;
    vsCode: string;
    vsCodePercent: string;
    chromeDevTools: string;
    chromeDevToolsPercent: string;
}

export interface toolsInfo{
    gitInfo: string;
    webpackInfo: string;
    viteInfo: string;
    npmInfo: string;
    vscodeInfo: string;
    chromeDevToolsInfo: string;
}