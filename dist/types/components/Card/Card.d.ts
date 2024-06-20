import React, { CSSProperties } from 'react';
import { ThemeType } from '../../types';
/**
 * Enum for predefined card heights.
 */
export declare enum CardHeight {
    Default = "hDefault",
    sm = "smallHeight",
    md = "mediumHeight",
    lg = "largeHeight",
    extraLarge = "extraLargeHeight",
    FitContent = "hFitContent",
    Fill = "hFill"
}
/**
 * Enum for predefined card widths.
 */
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
    /** If true, the card will have an outline on focus. */
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
declare const Card: React.FC<CardProps>;
export default Card;
