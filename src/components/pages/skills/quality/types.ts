export interface QualityProps {
    className?: string;
    Quality?: Quality;
    QualityInfo?: QualityInfo;
}

export interface Quality {
    heading: string;
}
export interface QualityInfo {
    educationInfo: string;
    communicationInfo: string;
    detailsInfo: string;
    organizationInfo: string;
    teamWorkInfo: string;
    thinkingInfo: string;
    problemsInfo: string;
    adaptiveInfo: string;
}