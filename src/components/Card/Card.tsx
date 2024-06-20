import React, { CSSProperties } from 'react';
import themes from '../../themes/theme';
import styled from '@emotion/styled';
import { ThemeType } from '../../types';
import Styles from './Card.module.css';

/**
 * Enum for predefined card heights.
 */
export enum CardHeight {
  Default = 'hDefault',
  sm = 'smallHeight',
  md = 'mediumHeight',
  lg = 'largeHeight',
  extraLarge = 'extraLargeHeight',
  FitContent = 'hFitContent',
  Fill = 'hFill',
}

/**
 * Enum for predefined card widths.
 */
export enum CardWidth {
  Default = 'wDefault',
  sm = 'smallWidth',
  md = 'mediumWidth',
  lg = 'largeWidth',
  extraLarge = 'extraLarge',
  doubleExtraLarge = 'doubleExtraLarge',
  Fill = 'wFill',
  FitContent = 'wFitContent',
}

/**
 * Props for the Card component.
 */
export type CardProps = {
  /** Child elements to be rendered inside the card. */
  children?: JSX.Element | JSX.Element[];
  /** Height of the card. */
  height?: CardHeight;
  /** Width of the card. */
  width?: CardWidth;
  /** Theme to be applied to the card. */
  theme?: ThemeType;
  /** If true, the card will have an outline. */
  outline?: boolean;
  /** Additional styles to be applied to the card. */
  style?: CSSProperties;
};

/**
 * A customizable Card component for displaying content and actions.
 * 
 * @param {CardProps} props - The properties for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> = ({
  height = CardHeight.Default,
  width = CardWidth.Default,
  theme = ThemeType.DARK,
  outline = false,
  style = {},
  children,
}) => {
  const CardContainer = styled.div`
    font-family: ${props => themes.light.fontFamily};
    background-color: ${props =>
      props.theme === 'light' ? themes.dark.onPrimary : themes.dark.onSurface};
    border: ${props =>
      `1px solid ${outline ? themes.light.primaryColor : 'none'}`};
    &:focus {
      outline: none;
      border: 1px solid ${themes.light.primaryColor};
       box-sizing: border-box; 
    }
    &:hover {
      box-shadow: 0 0 8px ${themes.light.primaryColor};
      transition: box-shadow 0.2s ease-in-out;
    }
  `;
  
  const CardContainerClasses = `${Styles['cardContainer']} ${Styles[height]} ${Styles[width]}`;
  
  return (
    <CardContainer
      role="tab"
      theme={theme}
      tabIndex={0}
      className={CardContainerClasses}
      style={style} 
    >
      {children}
    </CardContainer>
  );
};

export default Card;
