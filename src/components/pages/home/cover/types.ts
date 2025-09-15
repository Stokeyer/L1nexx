
export interface CoverProps {
    classname?: string;
    CoverInfo?: CoverInfo;
    CoverCards?: CoverCards;
}

export interface CoverInfo{
    nickname: string;
    job: string;
    text: string;
}

export interface CoverCards{
    title_code: string;
    title_design: string;
    title_education: string;
    info_code: string;
    info_design: string;
    info_education: string;
}