export interface designProps {
    className?: string;
    design?: design;
    designInfo?: designInfo;
}

export interface design{
    heading: string;
    resDesign: string;
    resDesignPercent: string;
    ui: string;
    uiPercent: string;
    cssFrame: string;
    cssFramePercent: string;
    figma: string;
    figmaPercent: string;
}

export interface designInfo{
    resDesignInfo: string;
    uiInfo: string;
    cssFrameInfo: string;
    figmaInfo: string;
}
