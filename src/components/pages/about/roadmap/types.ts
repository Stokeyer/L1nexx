export interface RoadMapProps{
    className?: string;
    RoadMap?: RoadMap;
    RoadMapLearning?: RoadMapLearning;
    RoadMapJavaScript?: RoadMapJavaScript;
    RoadMapTypeScript?: RoadMapTypeScript;
    RoadMapPortfolio?: RoadMapPortfolio;
}

export interface RoadMap{
    heading: string;
}

export interface RoadMapLearning{
    heading: string;
    language: string;
    information: string;
}

export interface RoadMapJavaScript{
    heading: string;
    language: string;
    information: string;
}

export interface RoadMapTypeScript{
    heading: string;
    language: string;
    information: string;
}

export interface RoadMapPortfolio{
    heading: string;
    portfolio: string;
    information: string;
}