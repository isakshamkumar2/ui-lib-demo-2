import React from 'react';
export interface ProgressMeterProps {
    progress?: number;
    progressSubtitles: [string, string] | [string, string, string];
    invertColor?: boolean;
    isNegative?: boolean;
}
declare const ProgressMeter: React.FC<ProgressMeterProps>;
export default ProgressMeter;
