import React from 'react';
import themes from '../../themes/theme';
import styled from '@emotion/styled';
import { ThemeType } from '../../types';
import Styles from './Card.module.css'
export enum CardHeight {
  Default = 'hDefault',
  sm = 'smallHeight',
  md = 'mediumHeight',
  lg = 'largeHeight',
  extraLarge = 'extraLargeHeight',
  FitContent = 'hFitContent',
  Fill = 'hFill',
}
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


export type CardProps = {
  children?: JSX.Element | JSX.Element[];
  height?: CardHeight;
  width?: CardWidth;
  theme?: ThemeType;
  outline?: boolean;
};

const Card: React.FC<CardProps> = ({
  height = CardHeight.Default,
  width = CardWidth.Default,
  theme = ThemeType.DARK,
  outline = false,
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
    >
      {children}
    </CardContainer>
  );
};

export default Card;
