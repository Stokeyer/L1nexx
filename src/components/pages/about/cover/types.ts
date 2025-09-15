export interface CoverProps{
    className?: string
    CoverHeader?: CoverHeader;
    CoverInfo?: CoverInfo;
    CoverCards?: CoverCards;
    CoverMotivation?: CoverMotivation;
    CoverReady?: CoverReady;
}

export interface CoverHeader{
    header: string;
    header_info: string;
}

export interface CoverInfo{
    heading: string;
    CoverInfo__text_1: string;
    CoverInfo__text_2: string;
    CoverInfo__text_3: string;
}

export interface CoverMotivation {
    heading: string;
    CoverMotivation__First: string;
    CoverMotivation__Second: string;
    CoverMotivation__Third: string;
    CoverMotivation__Fourth: string;
}

export interface CoverCards{
    heading: string;
    location: string;
    locationInfo: string;
    experience: string;
    experienceInfo: string;
    education: string;
    educationInfo: string
    language: string;
    languageInfo: string;
}

export interface CoverReady{
    heading: string;
    information: string;
    intern: string;
    education: string;
    team: string;
}