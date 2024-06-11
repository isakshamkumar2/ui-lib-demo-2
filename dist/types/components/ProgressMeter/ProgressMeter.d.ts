import React from 'react';
export interface ProgressMeterProps {
    progress?: number;
    progressSubtitles: [string, string] | [string, string, string];
    invertColor?: boolean;
    isNegative?: boolean;
    size?: 'default' | 'large';
}
export declare enum ProgressMeterSize {
    DEFAULT = "default",
    LARGE = "large"
}
declare const ProgressMeter: React.FC<ProgressMeterProps>;
export default ProgressMeter;
