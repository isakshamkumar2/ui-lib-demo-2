import React from 'react';
import Styles from './ProgressMeter.module.css';
import styled from '@emotion/styled';
import themes from '../../themes/theme';

export interface ProgressMeterProps {
  progress?: number;
  progressSubtitles: [string, string] | [string, string, string];
  invertColor?: boolean;
  isNegative?: boolean;
  size?: 'default' | 'large';
}

// export enum ProgressMeterSize {
//   DEFAULT = 'default',
//   LARGE = 'large',
// }

const ProgressMeter: React.FC<ProgressMeterProps> = ({
  progress = 70,
  progressSubtitles,
  isNegative = false,
  size = "default",
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
    <div className={` ${size === 'large' ? Styles.largeProgressContainer : Styles.progressContainer}`}>
      <div className={` ${size === 'large' ? Styles.largeOuterBar : Styles.outerBar}`}>
        <div className={` ${size === 'large' ? Styles.largeInnerBar : Styles.innerBar}`}>
          <div className={Styles.progressContent}>
            <ProgressContainer className={`${Styles.progressTitle} ${size === 'large' ? Styles.largeProgressTitle : ''}`}>
              {progress >= 0 && progress < 30 && progressTitles[0]}
              {progress >= 30 && progress < 60 && progressTitles[1]}
              {progress >= 60 && progressTitles[2]}
            </ProgressContainer>
            <ProgressSubtitles className={`${Styles.progressSubtitle} ${size === 'large' ? Styles.large : ''}`}>
              {progress >= 0 && progress < 30 && progressSubtitles[0]}
              {progress >= 30 && progress < 60 && progressSubtitles[1]}
              {progress >= 60 && (progressSubtitles[2] ? progressSubtitles[2] : progressSubtitles[1])}
            </ProgressSubtitles>
          </div>
        </div>
      </div>
      {/* White background "D" shaped progress bar */}
      <svg className={` ${size === 'large' ? Styles.largeSvg : Styles.svg}`} viewBox="0 0 260 160">
        <defs>
          <linearGradient id="white-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f2f2f2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f2f2f2', stopOpacity: 1 }} />
          </linearGradient>
          {/* Add the actual progress gradients */}
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
        {/* White background "D" shaped progress bar */}
        <path
          data-testid="white-path"
          className={` ${size === 'large' ? Styles.largePath : Styles.path}`}
          d="M10 150 A 120 120 0 0 1 250 150"
          fill="none"
          stroke="url(#white-gradient)"
          strokeLinecap="round"
          strokeWidth="20"
          strokeDasharray="380"
        />
        {/* Actual progress bar with gradient */}
        <path
          data-testid="actual-path"
          className={` ${size === 'large' ? Styles.largePath : Styles.path}`}
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
