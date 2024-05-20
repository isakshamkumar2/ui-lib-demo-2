export type LeftNavbarItems = {
    title: string;
    description: string;
    buttonHandler: () => void;
    buttonImage: string;
  };
  export type LeftNavBarIconData = {
    title: string;
    image: string;
    elements: LeftNavbarItems[];
    searchHandler: () => void;
  };
  export enum ThemeType {
    LIGHT = 'light',
    DARK = 'dark',
  }
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
  
  export type ProgressMeterProps = {
    progress?: number;
    progressSubtitles: [string, string] | [string, string, string];
    invertColor?: boolean;
    isNegative?: boolean;
  };
  