// ProgressMeter.jsx
import React from 'react';
import Styles from './ProgressMeter.module.css';
import styled from '@emotion/styled';
import themes from '../../themes/theme';

export interface ProgressMeterProps {
  progress?: number;
  progressSubtitles: [string, string] | [string, string, string];
  invertColor?: boolean;
  isNegative?: boolean;
}

const ProgressMeter: React.FC<ProgressMeterProps> = ({
  progress = 70,
  progressSubtitles,
  isNegative = false,
}) => {
  const progressTitles = ['None', 'Medium', 'High'];
  const strokeDashoffset = progress ? 380 - (progress / 100) * 380 : 380;
  let gradientId;
  if (progress >= 0 && progress < 30) {
    gradientId = 'gradient1';
  } else if (progress >= 30 && isNegative && progress <= 100) {
    gradientId = 'gradient2';
  } else if (progress >= 30 && !isNegative && progress <= 100) {
    gradientId = 'gradient3';
  }

  const ProgressContainer = styled.h3`
    font-family: ${themes.light.fontFamily};
  `;
  const ProgressSubtitles = styled.h4`
    font-family: ${themes.light.fontFamily};
  `;

  return (
    <div className={`${Styles.progressContainer} ${Styles.small}`}>
      <div className={Styles.outerBar}>
        <div className={Styles.innerBar}>
          <div className={Styles.progressContent}>
            <ProgressContainer className={`${Styles.progressTitle} ${Styles.small}`}>
              {progress >= 0 && progress < 30 && progressTitles[0]}
              {progress >= 30 && progress < 60 && progressTitles[1]}
              {progress >= 60 && progressTitles[2]}
            </ProgressContainer>
            <ProgressSubtitles className={`${Styles.progressSubtitle} ${Styles.small}`}>
              {progress >= 0 && progress < 30 && progressSubtitles[0]}
              {progress >= 30 && progress < 60 && progressSubtitles[1]}
              {progress >= 60 && (progressSubtitles[2] ? progressSubtitles[2] : progressSubtitles[1])}
            </ProgressSubtitles>
          </div>
        </div>
      </div>
      <svg className={Styles.svg} viewBox="0 0 260 160">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="40%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#BCDBFF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4597F7', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="50%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#BCDBFF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F74545', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#BCDBFF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2FA125', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          data-testid="path"
          className={Styles.path}
          d="M10 150 A 120 120 0 0 1 250 150"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth="20"
          strokeDasharray="380"
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
};

export default ProgressMeter;