interface Theme {
    light: {
        [key: string]: string;
    };
    dark: {
        [key: string]: string;
    };
}
declare const themes: Theme;
export default themes;
