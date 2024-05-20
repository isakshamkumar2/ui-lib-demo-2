import React from 'react';
import { ThemeType } from '../../types';
export declare enum CardHeight {
    Default = "hDefault",
    sm = "smallHeight",
    md = "mediumHeight",
    lg = "largeHeight",
    extraLarge = "extraLargeHeight",
    FitContent = "hFitContent",
    Fill = "hFill"
}
export declare enum CardWidth {
    Default = "wDefault",
    sm = "smallWidth",
    md = "mediumWidth",
    lg = "largeWidth",
    extraLarge = "extraLarge",
    doubleExtraLarge = "doubleExtraLarge",
    Fill = "wFill",
    FitContent = "wFitContent"
}
export type CardProps = {
    children?: JSX.Element | JSX.Element[];
    height?: CardHeight;
    width?: CardWidth;
    theme?: ThemeType;
    outline?: boolean;
};
declare const Card: React.FC<CardProps>;
export default Card;
